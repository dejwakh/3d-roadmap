/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import model from './one-floor-building.gltf'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, model)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 1.57, 0]}>
        <group position={[0.01, 0.67, 0.02]} rotation={[-Math.PI, 0, -Math.PI]}>
          <group position={[0.39, -0.05, 0.19]} rotation={[0, 1.57, 0]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[0.39, -0.55, -0.05]} rotation={[0, 1.57, 0]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[0.12, -0.13, -0.36]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[-0.13, -0.06, -0.36]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[0.17, 0.38, -0.36]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[-0.37, 0.4, -0.13]} rotation={[0, -1.57, 0]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[-0.37, -0.14, 0.19]} rotation={[0, -1.57, 0]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[-0.37, -0.54, -0.15]} rotation={[0, -1.57, 0]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[0.19, -0.54, 0.4]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[0.11, 0.4, 0.4]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
          <group position={[-0.17, -0.02, 0.4]}>
            <mesh material={materials.Grey} geometry={nodes.Cube4.geometry} position={[0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube3.geometry} position={[-0.02, -0.01, 0]} />
            <mesh material={materials.Grey} geometry={nodes.Cube.geometry} position={[0, 0.01, 0]} />
          </group>
        </group>
        <group position={[-0.24, 1.29, 0.18]} rotation={[0, 0, 0]}>
          <mesh
            material={materials.White}
            geometry={nodes.AC_Unit.geometry}
            position={[0.49, -0.04, -0.19]}
            rotation={[0, 0, 0]}
          />
          <mesh
            material={materials.White}
            geometry={nodes.AC_Unit1.geometry}
            position={[0.49, 0, -0.19]}
            rotation={[0, 0, 0]}
          />
        </group>
        <mesh
          material={materials['Light Grey']}
          geometry={nodes.Roof1.geometry}
          position={[0, 1.16, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials['Light Grey']}
          geometry={nodes.Building.geometry}
          position={[0, 0.58, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials['Light Grey']}
          geometry={nodes.Cube2.geometry}
          position={[0, 0.57, -0.01]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials['Dark Grey']}
          geometry={nodes.Roof2.geometry}
          position={[0, 1.2, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials['Dark Grey']}
          geometry={nodes.Door.geometry}
          position={[0, 0.58, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials.White}
          geometry={nodes.Windows_Middle.geometry}
          position={[0, 0.58, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials.White}
          geometry={nodes.Window_Edges.geometry}
          position={[0, 0.58, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials.Windows}
          geometry={nodes.Windows.geometry}
          position={[0, 0.58, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          material={materials.White}
          geometry={nodes.Base.geometry}
          position={[0, 0.04, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
      </group>
    </group>
  )
}
