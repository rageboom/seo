import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScenePanel, ExampleCases } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <ExampleCases />
        </div>
        <Routes>
          <Route path='/' element={<ScenePanel name='이 페이지는 babylonjs의 기능을 학습한 기록 입니다.' caseCode={0}/>} />
          <Route path='/basic-scene' element={<ScenePanel name='Basic Scene' caseCode={1}/>} />
          <Route path='/standard-materials' element={<ScenePanel name='Standard Materials' caseCode={2}/>} />
          <Route path='/pbr' element={<ScenePanel name='PBR' caseCode={3}/>} />
          <Route path='/custom-models' element={<ScenePanel name='Custom Models' caseCode={4}/>} />
          <Route path='/lights-shadows' element={<ScenePanel name='Lights Shadows' caseCode={5}/>} />
          <Route path='/camera-mechanics' element={<ScenePanel name='Camera Mechanics' caseCode={8}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
