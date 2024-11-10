import { OrbitControls } from '@react-three/drei'
import Book from './Book'
import frontImg from '../assets/front.jpg'
import backImg from '../assets/back.avif'
import edges from '../assets/edge.png'
import { RigidBody } from '@react-three/rapier'
import vertex from '../shaders/plane/vertex.glsl'
import fragment from '../shaders/plane/fragment.glsl'
import * as THREE from 'three'
import { useRef } from 'react'


const Experience = () => {
     
    // uniforms
    const uniforms = useRef(
      {
        color1: { value: new THREE.Color('red') },
        color2: { value: new THREE.Color('blue') },
      }
    ) 

  return (
    <>
     
     
     <RigidBody colliders = "cuboid" mass={1} friction={0.4} restitution={0.3} >
      <Book  
           front = {frontImg} 
           back={backImg} 
           top = {edges} 
           bottom = {edges} 
           edge={edges} 
           spine={edges} 
           position={[0, 5, 0]}
           
           />
           </RigidBody>

         
          
          <RigidBody type="fixed">
           <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -4, 0]} >
            <planeGeometry args={[60, 60]} />
            <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current}/>
            
           </mesh>
           </RigidBody>
     </>

    
  )
}

export default Experience
