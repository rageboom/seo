import { CubeTexture, Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3, PBRMaterial, Texture, Color3, GlowLayer } from "@babylonjs/core";

export default class PBR {
  engine: Engine;
  scene: Scene;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.createScene();

    this.createEnviroment();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    })
  }

  createScene(): Scene {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera('camera', new Vector3(0, 1, -5), scene);
    camera.attachControl();
    camera.speed = 0.25;
    const hemiLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), scene);

    // 밝기
    hemiLight.intensity = 0.5;

    const envTex = CubeTexture.CreateFromPrefilteredData('./enviroment/sky.env',scene);
    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex, true);

    // scene.environmentIntensity = 0.5;
    
    return scene;
  }

  createEnviroment(): void {
    const ground = MeshBuilder.CreateGround('ground', {width: 10, height: 10}, this.scene);
    const ball = MeshBuilder.CreateSphere('ball', {diameter: 1}, this.scene);

    ball.position = new Vector3(0, 1, 0);

    ground.material = this.createAsphalt();
    ball.material = this.createShine();
  }

  createAsphalt(): PBRMaterial {
    const pbr = new PBRMaterial('pbr', this.scene);

    pbr.albedoTexture = new Texture('./textures/asphalt/asphalt_diffuse.jpg', this.scene);
    pbr.bumpTexture = new Texture('./textures/asphalt/asphalt_normal.jpg', this.scene);
    
    pbr.invertNormalMapX = true;
    pbr.invertNormalMapY = true;
    
    pbr.useAmbientOcclusionFromMetallicTextureRed = true;
    pbr.useRoughnessFromMetallicTextureGreen = true;
    pbr.useMetallnessFromMetallicTextureBlue = true;

    pbr.metallicTexture = new Texture('./textures/asphalt/asphalt_ao_rough_metal.jpg', this.scene);

    
    // pbr.roughness = 1;
    return pbr;
  }

  createShine (): PBRMaterial {
    const pbr = new PBRMaterial('pbr', this.scene);

    pbr.environmentIntensity = 0.25;

    pbr.albedoTexture = new Texture('./textures/shine/shine_spec.png', this.scene);
    pbr.bumpTexture = new Texture('./textures/shine/shine_normal.png', this.scene);

    pbr.invertNormalMapX = true;
    pbr.invertNormalMapY = true;

    pbr.useAmbientOcclusionFromMetallicTextureRed = true;
    pbr.useRoughnessFromMetallicTextureGreen = true;
    pbr.useMetallnessFromMetallicTextureBlue = true;

    pbr.metallicTexture = new Texture('./textures/shine/shine_ao.png', this.scene);
    pbr.emissiveColor = new Color3(1, 1, 1);
    pbr.emissiveTexture = new Texture('./textures/shine/shine_emissive.png', this.scene);
    pbr.emissiveIntensity = 3;


    const glowLayer = new GlowLayer('glow', this.scene);
    glowLayer.intensity = 1;

    pbr.roughness = 1;

    return pbr;
  }
}