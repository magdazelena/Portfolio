import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import BackgroundAnimation from './BackgroundAnimation';

import Camera from './Camera';

function Background(props) {
  const [position, setPosition] = useState('back');
  const currentTheme = useSelector(state => state.currentTheme);
  useEffect(() => {
    if (props.isForeground) {
      setPosition('front');

    } else {
      setPosition('back');
    }
  }, [props.isForeground]);

  return (
    <div className={`Background ${position} ${currentTheme}`}>
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
