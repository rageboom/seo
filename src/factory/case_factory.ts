import {BasicScene, StandardMaterials, PBR, CustomModels, LightsShadows } from '../examples';
import { CameraMechanics } from '../examples/camera_mechanics';

export default function CaseFactory (canvas: HTMLCanvasElement, caseCode: number) {
  switch (caseCode) {
    case 0:
      return {
        metaProps: {
          title: 'SEO TEST | BabylonJS Stydy',
          description: '이 페이지는 babylonjs의 기능을 학습한 기록 입니다.',
          keywords: 'babylonejs'
        },
      };
    case 1:
      return {
        metaProps: {
          title: 'SEO TEST | Basic Snene',
          description: '이 페이지는 babylonejs의 기본 씬 연습입니다.',
          keywords: 'babylonejs'
        },
        scene: new BasicScene(canvas)
      };
    case 2:
      return {
        metaProps: {
          title: 'SEO TEST | Standard Materials',
          description: '이 페이지는 babylonejs의 Standard Materials 연습입니다.',
          keywords: 'babylonejs'
        },
        scene: new StandardMaterials(canvas)
      }
    case 3: 
      return {
        metaProps: {
          title: 'SEO TEST | PBR',
          description: '이 페이지는 babylonejs의 PBR 연습입니다.',
          keywords: 'babylonejs'
        },
        scene: ''//new PBR(canvas),
      }
    case 4:
      return {
        metaProps: {
          title: 'SEO TEST | Custom Models',
          description: '이 페이지는 babylonejs의 Custom Models 연습입니다.',
          keywords: 'babylonejs'
        },
        scene: ''//new CustomModels(canvas),
    }
    case 5:
      return {
        metaProps: {
          title: 'SEO TEST | Lights & Shadows',
          description: '이 페이지는 babylonejs의 Lights & Shadows 연습입니다.',
          keywords: 'babylonejs'
        },
      scene: ''//new LightsShadows(canvas),
    }
    case 8:
      return {
        metaProps: {
          title: 'SEO TEST | Camera Mechanics',
          description: '이 페이지는 babylonejs의 Camera Mechanics 연습입니다.',
          keywords: 'babylonejs'
        },
      scene: ''//new CameraMechanics(canvas),
    }
    default:
      return null;
  }
}