import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import THREE from '../3D/three';
import BackgroundAnimation from './BackgroundAnimation';

import Camera from './Camera';

function Background(props) {
  const [position, setPosition] = useState('back');
  const camera = useRef();

  useEffect(() => {
    if (props.isForeground) {
      setPosition('front');

    } else {
      setPosition('back');
    }
  }, [props.isForeground]);

  return (
    <div className={`Background ${position}`}>
      <Canvas>
        <Camera
          changedPositionX={position === 'front' ? 60 : 0}
          changedPositionZ={position === 'front' ? 200 : 100}
          fov={200}
          aspect={window.innerWidth / window.innerHeight}
          position={[0, -120, 100]} />
        <BackgroundAnimation
          rotateY={position === 'front' ? Math.PI / 3 : 0}
          rotateZ={position === 'front' ? -Math.PI / 4 : 0} />
      </Canvas>
    </div>
  );
}

export default Background;
