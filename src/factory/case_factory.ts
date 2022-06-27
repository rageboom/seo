import {BasicScene, StandardMaterials, PBR, CustomModels, LightsShadows } from '../examples';
import { CameraMechanics } from '../examples/camera_mechanics';

export default function CaseFactory (canvas: HTMLCanvasElement, caseCode: number) {
  switch (caseCode) {
    case 1:
      return {
        mataProps: {
          title: 'SEO TEST | Basic Snene',
          discription: '이 페이지는 babylonejs의 기본 씬 연습입니다.',
          keyworkds: 'babylonejs'
        },
        scene: new BasicScene(canvas)
      };
    case 2:
      return {
        mataProps: {
          title: 'SEO TEST | Standard Materials',
          discription: '이 페이지는 babylonejs의 Standard Materials 연습입니다.',
          keyworkds: 'babylonejs'
        },
        scene: new StandardMaterials(canvas)
      }
    case 3: 
      return {
        mataProps: {
          title: 'SEO TEST | PBR',
          discription: '이 페이지는 babylonejs의 PBR 연습입니다.',
          keyworkds: 'babylonejs'
        },
        scene: ''//new PBR(canvas),
      }
    case 4:
      return {
        mataProps: {
          title: 'SEO TEST | Custom Models',
          discription: '이 페이지는 babylonejs의 Custom Models 연습입니다.',
          keyworkds: 'babylonejs'
        },
        scene: ''//new CustomModels(canvas),
    }
    case 5:
      return {
        mataProps: {
          title: 'SEO TEST | Lights & Shadows',
          discription: '이 페이지는 babylonejs의 Lights & Shadows 연습입니다.',
          keyworkds: 'babylonejs'
        },
      scene: ''//new LightsShadows(canvas),
    }
    case 8:
      return {
        mataProps: {
          title: 'SEO TEST | Camera Mechanics',
          discription: '이 페이지는 babylonejs의 Camera Mechanics 연습입니다.',
          keyworkds: 'babylonejs'
        },
      scene: ''//new CameraMechanics(canvas),
    }
    default:
      return null;
  }
}