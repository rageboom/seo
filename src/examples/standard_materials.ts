import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, StandardMaterial, Texture, Vector3 } from "@babylonjs/core";

export default class StandardMaterials {
  engine: Engine;
  scene: Scene;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.createScene();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    })
  }

  createScene(): Scene {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera('camera', new Vector3(0, 1, -5), scene);

    camera.attachControl();
    camera.speed = 0.5;

    const hemiLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), this.scene);

    // 밝기
    hemiLight.intensity = 1;

    // const ground = MeshBuilder.CreateGround('ground', {width: 10, height: 10}, this.scene);
    const ball = MeshBuilder.CreateSphere('ball', {diameter: 1}, this.scene);

    ball.position = new Vector3(0, 1, 0);

    // ground.material = this.createGroundMaterial();
    ball.material = this.createBallMaterial();
    
    return scene;
  }

  createGroundMaterial(): StandardMaterial {
    const groundMat = new StandardMaterial('groundMat', this.scene);

    const uvScale = 4;
    const texArray: Texture[] = [];

    const diffuseTex = new Texture('./textures/rock/rock_diffuse.jpg', this.scene);
    const aoTex = new Texture('./textures/rock/rock_ao.jpg', this.scene);
    const normalTex = new Texture('./textures/rock/rock_normal.jpg', this.scene);
    const specTex = new Texture('./textures/rock/rock_spec.jpg', this.scene);
    
    groundMat.diffuseTexture = diffuseTex;
    texArray.push(diffuseTex);

    groundMat.ambientTexture = aoTex;
    texArray.push(aoTex);

    groundMat.specularTexture = specTex;
    texArray.push(specTex);

    groundMat.bumpTexture = normalTex;
    texArray.push(normalTex);

    texArray.forEach(tex => {
      tex.uScale = uvScale;
      tex.vScale = uvScale;
    })

    return groundMat;
  }

  createBallMaterial(): StandardMaterial {
    const ballMat = new StandardMaterial('ballMat', this.scene);
    const uvScale = 1;
    const texArray: Texture[] = [];

    const diffuseTex = new Texture('./textures/metal/metal_diffuse.jpg', this.scene);
    const aoTex = new Texture('./textures/metal/metal_ao.jpg', this.scene);
    const normalTex = new Texture('./textures/metal/metal_normal.jpg', this.scene);
    const specTex = new Texture('./textures/metal/metal_spec.jpg', this.scene);
    
    ballMat.invertNormalMapX = true;
    ballMat.invertNormalMapY = true;
    ballMat.diffuseTexture = diffuseTex;
    texArray.push(diffuseTex);

    ballMat.specularTexture = specTex;
    ballMat.specularPower = 10;
    texArray.push(specTex);
    
    ballMat.bumpTexture = normalTex;
    texArray.push(normalTex);

    ballMat.ambientTexture = aoTex;
    texArray.push(aoTex);

    texArray.forEach(tex => {
      tex.uScale = uvScale;
      tex.vScale = uvScale;
    })

    return ballMat
  }

}