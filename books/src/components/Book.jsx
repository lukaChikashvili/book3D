import React from 'react'

import * as THREE from 'three'
import { useTexture } from '@react-three/drei'


const Book = ({edge, spine, front, back, top, bottom, position = [0, 0, 0]}) => {
   
    const urls = [
      edge, spine,
      top, bottom,
      front, back

    ];

const materials = urls.map(url => {
    return new THREE.MeshLambertMaterial({
        map: useTexture(url)
    });
})

  return (
   <>
     <mesh position={position} material={materials} castShadow >
       <boxGeometry args={[3, 4, 0.7]}  />
        
       
     </mesh>
   </>
  )
}

export default Book
