import { useEffect } from 'react';

import * as THREE from 'three';

import SceneInit from './lib/SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    test.scene.add(boxMesh);
  }, []);

  return (
    <div className="container">
      <div className="container flex justify-center items-center">
      <div className="text-container text-white">
        <br></br>
        <h1 className="text-4xl">Pathfinder for Autonomous Navigation</h1> {/* Adjust the size as needed */}

        <p>Pathfinder for Autonomous Navigation (PAN) was a project run by the students of Space Systems Design Studio.
          Check out what PAN is up to these days!
        </p>
        <br></br>
      </div>
      <div className="canvas-container hidden md:block">
        <canvas id="myThreeJsCanvas" />
      </div>
    </div>
      <div className="canvas-container">
        <canvas id="myThreeJsCanvas" />
      </div>
    </div>
  );
}

export default App;
