/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { HTML } from 'drei';
import model from './office-floor.gltf';
import './office-floor.style.css';

export default function Model(props) {
  const { floor, hovered } = props;
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, model);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Light Grey']} geometry={nodes.Walls.geometry} />
      <mesh material={materials.Windows} geometry={nodes.Windows.geometry} />
      <HTML style={{ pointerEvents: 'none', display: hovered ? 'block' : 'none' }}><div className="floorName">{floor.name}</div></HTML>
    </group>
  );
}
