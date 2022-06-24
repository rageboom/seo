import { BasicScene, StandardMaterials, PBR, CustomModels, LightsShadows } from '../examples';
import { CameraMechanics } from '../examples/camera_mechanics';

export default function CaseFactory (canvas: HTMLCanvasElement, caseCode: number) {
  switch (caseCode) {
    case 1:
      return new BasicScene(canvas);
    case 2:
      return new StandardMaterials(canvas);
    case 3:
      return new PBR(canvas);
    case 4:
      return new CustomModels(canvas);
    case 5:
      return new LightsShadows(canvas);
    case 8:
      return new CameraMechanics(canvas);
    default:
      return null;
  }
}