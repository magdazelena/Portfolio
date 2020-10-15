import React, { useEffect, useRef } from 'react';
import { useThree, useFrame } from 'react-three-fiber';
import gsap from 'gsap';
function Camera(props) {
  const ref = useRef()
  const { setDefaultCamera } = useThree()
  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(ref.current), [])
  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld())

  useEffect(() => {
    gsap.to(ref.current.position, {
      x: props.changedPositionX,
      z: props.changedPositionZ,
      duration: 1
    })
  }, [props.changedPositionX])
  return <perspectiveCamera ref={ref} {...props} />
}

export default Camera;