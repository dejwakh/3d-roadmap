/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import model from './office-floor-c.gltf'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, model)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Light Grey']} geometry={nodes.Building.geometry} />
      <mesh material={materials.Windows} geometry={nodes.Windows.geometry} />
    </group>
  )
}
