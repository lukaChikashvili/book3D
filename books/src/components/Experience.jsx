import { OrbitControls } from '@react-three/drei'
import Book from './Book'
import frontImg from '../assets/front.jpg'
import backImg from '../assets/back.avif'
import edges from '../assets/edge.png'
import { RigidBody } from '@react-three/rapier'
import vertex from '../shaders/plane/vertex.glsl'
import fragment from '../shaders/plane/fragment.glsl'
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'


const Experience = () => {

  const [showSecondBook, setShowSecondBook] = useState(false);
     
    // uniforms
    const uniforms = useRef(
      {
        color1: { value: new THREE.Color('#D3CCE3') },
        color2: { value: new THREE.Color('#E9E4F0') },
      }
    ) 

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSecondBook(true);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

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

           {showSecondBook && (
        <RigidBody colliders="cuboid" mass={1} friction={0.4} restitution={0.3}>
          <Book  
            front={frontImg}
            back={backImg}
            top={edges}
            bottom={edges}
            edge={edges}
            spine={edges}
            position={[0.5, 20, -2.5]}
          />
        </RigidBody>
      )}

<RigidBody colliders="cuboid" mass={1} friction={0.4} restitution={0.3}>
          <Book  
            front={frontImg}
            back={backImg}
            top={edges}
            bottom={edges}
            edge={edges}
            spine={edges}
            position={[1.5, 20, -3]}
          />
        </RigidBody>

        <RigidBody colliders="cuboid" mass={1} friction={0.4} restitution={0.3}>
          <Book  
            front={frontImg}
            back={backImg}
            top={edges}
            bottom={edges}
            edge={edges}
            spine={edges}
            position={[3, 25, -4]}
          />
        </RigidBody>

        <RigidBody colliders="cuboid" mass={1} friction={0.4} restitution={0.3}>
          <Book  
            front={frontImg}
            back={backImg}
            top={edges}
            bottom={edges}
            edge={edges}
            spine={edges}
            position={[3, 35, -4]}
          />
        </RigidBody>


          

         
          
          <RigidBody type="fixed">
           <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[10, -4, 2]} >
            <planeGeometry args={[50, 50]} />
            <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms.current}/>
            
           </mesh>
           </RigidBody>
     </>

    
  )
}

export default Experience
