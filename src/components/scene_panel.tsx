import { useEffect, useRef } from 'react'
import {CaseFactory} from '../factory';

interface Panel {
  name: string;
  caseCode: number;
}

function ScenePanel ({name, caseCode}: Panel) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    const root = document.getElementById(`canvas-container-${caseCode}`);

    if (!canvas) {
      const canvas = document.createElement('canvas');
      canvasRef.current = canvas;
      canvas.setAttribute('id', `canvas-${caseCode}`);
      root?.appendChild(canvas);
      
      const scene = CaseFactory(canvas, caseCode);
    }
    return (() => {
      canvasRef.current?.remove();
      canvasRef.current = null;
    })
  }, [caseCode]);

  return(<><div>{name}</div><div id={`canvas-container-${caseCode}`}></div></>);
}

export default ScenePanel;