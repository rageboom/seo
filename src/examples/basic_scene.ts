import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders";

export default class BasicScene {
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

    const hemiLight = new HemisphericLight('hemiLight', new Vector3(0, 1, 0), this.scene);

    // 밝기
    hemiLight.intensity = 0.5;

    const ground = MeshBuilder.CreateGround('ground', {width: 10, height: 10}, this.scene);
    const ball = MeshBuilder.CreateSphere('ball', {diameter: 1}, this.scene);

    ball.position = new Vector3(0, 1, 0);
    
    return scene;
  }


}