import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import BackgroundAnimation from './BackgroundAnimation';

import Camera from './Camera';

function Background(props) {
  const [position, setPosition] = useState('back');
  const [location, setLocation] = useState(0);
  const currentTheme = useSelector(state => state.currentTheme);
  useEffect(() => {
    if (props.isForeground) {
      setPosition('front');
      setLocation(0);
    } else {
      setPosition('back');
      setLocation(props.location);
    }
    // eslint-disable-next-line
  }, [props.isForeground]);

  useEffect(() => {
    console.log(props.location)
    setLocation(props.location);
  }, [props.location]);

  return (
    <div className={`Background ${position} ${currentTheme}`}>
      <Canvas>
        <Camera
          changedPositionX={position === 'front' ? 60 : 0}
          changedPositionZ={position === 'front' ? 200 : 100}
          changedPositionY={location === -1 ? 300 : location === 2 ? 400 : -120}
          fov={location === -1 && position === 'back' ? 80 : 200}
          aspect={window.innerWidth / window.innerHeight}
          position={[0, -120, 100]} />
        <BackgroundAnimation
          rotateY={position === 'front' ? Math.PI / 3 : 0}
          rotateZ={position === 'front' ? -Math.PI / 4 : 0}
          rotateX={location === 1 ? Math.PI / 3 : location === -1 ? -Math.PI / 1.5 : location === 2 ? -Math.PI / 2 : 0}
          ifactor={location === 2 ? 7 : 1}
        />
      </Canvas>
    </div>
  );
}

export default Background;
