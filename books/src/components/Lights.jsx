import React from 'react'

const Lights = () => {
  return (
     <>
     <ambientLight intensity={2} />
     <directionalLight 
  position={[5, 5, 5]} 
  intensity={1} 
  castShadow 
/>

      
     </>
  )
}

export default Lights
