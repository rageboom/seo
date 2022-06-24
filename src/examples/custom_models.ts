import { CubeTexture, Engine, FreeCamera, MeshBuilder, Scene, Vector3, PBRMaterial, Texture, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders";

export default class CustomModels {
  engine: Engine;
  scene: Scene;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.createScene();

    // this.createGround();
    // this.createApple();
    this.createCampsite();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    })
  }

  createScene(): Scene {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera('camera', new Vector3(0, 0.75, -8), scene);
    camera.attachControl();
    camera.speed = 0.25;

    // 밝기
    const envTex = CubeTexture.CreateFromPrefilteredData('./enviroment/sky.env',scene);
    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex, true);

    scene.environmentIntensity = 0.5;
    
    return scene;
  }

  createGround(): void {
    const ground = MeshBuilder.CreateGround('ground',{
      width: 10, height: 10
    }, this.scene)

    ground.material = this.createAsphalt();
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

  async createApple(): Promise<void> {
    // SceneLoader.ImportMesh('', './models/', "apple_01.glb", this.scene, (meshes) => {
    //   console.log('meshes', meshes);
    // });
    const {meshes} = await SceneLoader.ImportMeshAsync('', './models/', 'apple.glb');  

    console.log(meshes);
  }

  async createCampsite(): Promise<void> {
    const models = await SceneLoader.ImportMeshAsync('', './models/', 'survival.glb');  

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    models.meshes[0].position = new Vector3(-3, 0 , 0 );

    console.log(models);
  }

  
}