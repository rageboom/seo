import { useEffect, useRef, useState } from 'react'
import {CaseFactory} from '../factory';
import MetaTags from './meta_tags';

interface Panel {
  name: string,
  caseCode: number,
  children?: HTMLElement,
}

function ScenePanel ({name, caseCode, children}: Panel) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [metaTagProps, setMetaTagProps] = useState({});

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const root = document.getElementById(`canvas-container-${caseCode}`);

    if (!canvas) {
      const canvas = document.createElement('canvas');
      canvasRef.current = canvas;
      canvas.setAttribute('id', `canvas-${caseCode}`);
      root?.appendChild(canvas);
      
      const scene = CaseFactory(canvas, caseCode);

      if (scene?.metaProps) {
        setMetaTagProps(scene.metaProps);
      } else {
        setMetaTagProps({});
      }
    }
    return (() => {
      canvasRef.current?.remove();
      canvasRef.current = null;
    })
  }, [caseCode]);

  return(
    <>
      <MetaTags {...metaTagProps}/>
      <h1>{name}</h1>
      <div id={`canvas-container-${caseCode}`} />
      {children}
    </>
    )
}

export default ScenePanel;