import React from 'react'

const Lights = () => {
  return (
     <>
     <ambientLight intensity={1} castShadow />
     <directionalLight 
  position={[5, 5, 5]} 
  intensity={1} 
  castShadow 
/>

      
     </>
  )
}

export default Lights
