import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import SceneInit from './lib/SceneInit';

function App() {
  const [emailCount, setEmailCount] = useState(0);

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // Use default Earth texture
    const earthTexture = new THREE.TextureLoader().load('textures/daynight_earth.jpg'); // Default texture

    // Create Earth sphere
    const earthGeometry = new THREE.SphereGeometry(16, 32, 32); // Adjust radius as needed
    const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });

    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    test.scene.add(earthMesh);

    // Function to update the email count
    const updateEmailCount = async () => {
      try {
        // Call the Flask server route for "num_emails"
        const response = await fetch('http://localhost:5000/num_emails');
        const data = await response.json();

        // Update the email count in the state
        setEmailCount(data.count);
      } catch (error) {
        console.error('Error fetching email count:', error);
      }
    };

    // Call the updateEmailCount function every second
    const intervalId = setInterval(updateEmailCount, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="container flex justify-center items-center">
        <div className="text-container text-white">
          <br></br>
          <h1 className="text-4xl">Pathfinder for Autonomous Navigation</h1>

          <p>
            Pathfinder for Autonomous Navigation (PAN) was a project run by the students of Space Systems Design Studio.
            Check out what PAN is up to these days!
          </p>
          <p>{emailCount} emails from Leader</p>
          <br></br>
        </div>
        <div className="canvas-container hidden md:block">
          <canvas id="myThreeJsCanvas" />
        </div>
      </div>
    </div>
  );
}

export default App;
