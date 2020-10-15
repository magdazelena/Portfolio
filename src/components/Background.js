import React, { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import THREE from '../3D/three';
import BackgroundAnimation from './BackgroundAnimation';

function Background(props) {
  const [position, setPosition] = useState('back');


  useEffect(() => {
    if (props.isForeground) {
      setPosition('front');
    } else {
      setPosition('back');
    }
  }, [props.isForeground]);

  return (
    <div className={`Background ${position}`}>
      <Canvas
        camera={
          {
            fov: 100,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 1000,
            position: new THREE.Vector3(0, -120, 200)
          }
        }>
        <BackgroundAnimation />

      </Canvas>
    </div>
  );
}

export default Background;
