import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScenePanel, ExampleCases } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>이 사이트는 SEO를 테스트 해보기 위한 사이트 입니다.</h1>
        <p>Here is plain app.</p>
        <p>Example SEO.</p>
      </header> */}
      <BrowserRouter>
        <div>
          <ExampleCases />
        </div>
        <Routes>
          <Route path='/basic-scene' element={<ScenePanel name='Basic Scene' caseCode={1}/>} />
          {/* <Route path='/standard-materials' element={<ScenePanel name='Standard Materials' caseCode={2}/>} /> */}
          {/* <Route path='/pbr' element={<ScenePanel name='PBR' caseCode={3}/>} /> */}
          {/* <Route path='/custom-models' element={<ScenePanel name='Custom Models' caseCode={4}/>} />
          <Route path='/lights-shadows' element={<ScenePanel name='Lights Shadows' caseCode={5}/>} />
          <Route path='/camera-mechanics' element={<ScenePanel name='Camera Mechanics' caseCode={8}/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
