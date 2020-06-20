/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import model from './car.gltf'



export default function Model(props) {
  const {side} = props
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, model)
  const colors = {
    purple: materials.Purple,
    white: materials.White,
    black: materials.Black,
    yellow: materials.Yellow
  }

  const target = new THREE.Object3D()
  target.position.z = 10
  target.position.y = -10
  target.position.x = -1


  const color = (side === 'frontend') ? colors.purple : colors.black


  return (
    <group ref={group} {...props} dispose={null}>
      {
        side === 'backend' && 
        <>
          <primitive object={target} />
          <spotLight distance={25} intensity={1} color="lightblue" position={[-.1,0,.28]} angle={Math.PI/3} target={target} decay={.3} penumbra={0.2}/>
          <spotLight distance={25} intensity={1} color="lightblue" position={[.1,0,.28]} angle={Math.PI/3} target={target} decay={.3} penumbra={0.2}/>
        </>
      }
      <group position={[0, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
        <group position={[0, -0.1, -0.12]} rotation={[0, 1.57, 0]}>
          <mesh material={materials.Yellow} geometry={nodes.Head_Light.geometry} position={[0.18, 0.01, -0.09]} receiveShadow castShadow/>
        </group>
        <group position={[0, -0.1, -0.12]} rotation={[0, 0, 0]}>
          <group position={[0, 0.04, 0.1]} rotation={[0, 0, 0]}>
            <mesh material={color} geometry={nodes.Car_Frame.geometry} receiveShadow castShadow/>
            <mesh material={materials.Windows} geometry={nodes.Windows.geometry} position={[0, 0, 0]} receiveShadow castShadow/>
          </group>
        </group>
        <group position={[0, -0.1, -0.04]}>
          <group position={[0, 0, -0.09]}>
            <group position={[0.12, -0.03, -0.1]} rotation={[0, 0, 0]}>
              <mesh material={materials.Purple} geometry={nodes.Wheel.geometry} />
              <mesh material={materials.Black} geometry={nodes['Wheel-Black'].geometry} />
              <mesh material={materials.White} geometry={nodes['Wheel-White'].geometry} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
