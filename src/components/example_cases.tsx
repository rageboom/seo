import { Link } from "react-router-dom";

function ExampleCases () {
  return(
  <div>
    <button>
      <Link to='/basic-scene'>Basic Scene</Link>
      </button>
    <button>
      <Link to='/standard-materials'>Standard Materials</Link>
    </button>
    <button>
      <Link to='/pbr'>PBR</Link>
    </button>
    <button>
      <Link to='/custom-models'>Custom Models</Link>
    </button>
    <button>
      <Link to='/lights-shadows'>Lights Shadows</Link>
    </button>
    <button>
      <Link to='/camera-mechanics'>Camera Mechanics</Link>
    </button>
  </div>
  )
}

export default ExampleCases;