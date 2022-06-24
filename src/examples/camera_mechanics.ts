import { AbstractMesh, ArcRotateCamera, CubeTexture, Engine, Scene, SceneLoader, Vector3 } from "@babylonjs/core";

export class CameraMechanics {
  scene: Scene;
  engine: Engine;
  watch!: AbstractMesh;
  camera!: ArcRotateCamera;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.createScene();
    this.engine.displayLoadingUI();
    
    this.createWatch();
    this.createCamera();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    })
  }

  createScene(): Scene {
    const scene = new Scene(this.engine);

    const envTex = CubeTexture.CreateFromPrefilteredData(
      './enviroment/xmas_bg.env',
      scene
    );
    envTex.gammaSpace = false;
    envTex.rotationY = Math.PI;
    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex, true, 1000, 0.25);
    return scene;
  }

  //https://doc.babylonjs.com/divingDeeper/cameras/camera_introduction
  createCamera(): void {
    this.camera = new ArcRotateCamera(
      "camera",
      -Math.PI/2, // alpha 가로
      Math.PI/2, // beta 세로
      40, Vector3.Zero(), this.scene);

    this.camera.attachControl(this.canvas, true);
    this.camera.wheelPrecision = 100;

    // 카메라의 최소, 최대 거리
    this.camera.minZ = 0.3;

    this.camera.lowerRadiusLimit = 2;
    this.camera.upperRadiusLimit = 10;

    this.camera.panningSensibility = 0;

    // this.camera.useBouncingBehavior = true;

    this.camera.useAutoRotationBehavior = true;

    if (this.camera.autoRotationBehavior) {
      this.camera.autoRotationBehavior.idleRotationSpeed = .5;
      this.camera.autoRotationBehavior.idleRotationSpinupTime = 1000;
      this.camera.autoRotationBehavior.idleRotationWaitTime = 2000;
      this.camera.autoRotationBehavior.zoomStopsAnimation = true;
    }

    this.camera.useFramingBehavior = true;
    if (this.camera.framingBehavior) {
      this.camera.framingBehavior.radiusScale = 2;
      this.camera.framingBehavior.framingTime = 4000;
    }
  }

  async createWatch(): Promise<void> {
    const { meshes } = await SceneLoader.ImportMeshAsync(
      "", "./models/", "vintage_watch.glb"
    );

    // console.log('meshes', meshes);

    this.watch = meshes[0];

    // meshes[1].showBoundingBox = true;
    // meshes[2].showBoundingBox = true;
    // meshes[3].showBoundingBox = true;

    this.camera.setTarget(meshes[3]);
    this.engine.hideLoadingUI();
  }
}