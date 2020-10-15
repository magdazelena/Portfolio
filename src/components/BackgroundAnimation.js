import React, { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import THREE from '../3D/three';
import gsap from 'gsap';
import SimplexNoise from 'simplex-noise';

function BackgroundAnimation(props) {
  const scale = 20;
  const width = 2000;
  const height = 2000;
  const cols = width / scale;
  const rows = height / scale;

  const simplex = new SimplexNoise();

  const mesh = useRef();
  const frontLight = useRef();
  const redLight = useRef();
  const purpleLight = useRef();
  const greenLight = useRef();

  let f = 0;
  let zArray = [];
  let rmapped = 0;
  const positionChange = 500;


  //initial values for ZArray
  let ioff = f;
  for (let i = 0; i < cols; i++) {
    let joff = f;
    for (let j = 0; j < rows; j++) {
      zArray.push(map_range(simplex.noise2D(ioff, joff), 0, 1, -5, 5));
      joff += .1;
    }
    ioff += .1;
  }



  useFrame((state, time) => {
    f += .01;
    let ioff = f;
    zArray = [];
    for (let i = 0; i < cols; i++) {
      let joff = 0;
      for (let j = 0; j < rows; j++) {
        zArray.push(map_range(simplex.noise2D(ioff, joff), 0, 1, -18, 18));
        joff += .1;
      }
      ioff += .1;
    }
    for (let x = 0; x < mesh.current.geometry.vertices.length; x++) {
      mesh.current.geometry.vertices[x].z = zArray[x];
    }

    mesh.current.geometry.verticesNeedUpdate = true;
    redLight.current.position.x = Math.sin(time) * positionChange;
    redLight.current.position.y = Math.sin(time) * positionChange;
    purpleLight.current.position.x = Math.cos(time) * positionChange / 2;
    purpleLight.current.position.y = Math.sin(time) * positionChange / 2;

    greenLight.current.position.x = Math.sin(time) * positionChange / 3;
    greenLight.current.position.y = Math.sin(time) * positionChange / 3;
    var h = rmapped * 0.01 % 1;
    var s = 0.5;
    var l = 0.5;
    frontLight.current.color.setHSL(h, s, l);

    rmapped++;
  })

  useEffect(() => {
    if (mesh.current !== undefined) {
      gsap.to(mesh.current.rotation, {
        y: props.rotateY,
        z: props.rotateZ,
        duration: 1,
        ease: true
      })
    }

  }, [props.rotateY])

  return (
    <group>
      <mesh
        {...props}
        ref={mesh}
      >
        <planeGeometry args={[width * 3, height * 3, cols, rows]} />
        <meshStandardMaterial args={[{
          color: 0x769fb6,
          wireframe: true,
          transparent: true,
          opacity: 0.8
        }]} />
      </mesh>
      <hemisphereLight color={0x769fb6} groundColor={0x000000} intensity={1} />
      <directionalLight ref={redLight} color={0xff0040} intensity={1} position={new THREE.Vector3(0, 0, 102)} />
      <directionalLight ref={purpleLight} color={0x0040ff} intensity={2} position={new THREE.Vector3(0, 0, 200)} />
      <pointLight ref={greenLight} color={0x80ff80} distance={2000} intensity={1} decay={2} position={new THREE.Vector3(0, 0, 153)} />
      <directionalLight ref={frontLight} color={0xffffff} intensity={1} decay={2} position={new THREE.Vector3(300, 300, 3000)} />
    </group>
  )
}

export default BackgroundAnimation;

function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}