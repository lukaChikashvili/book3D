import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'
import { Physics } from '@react-three/rapier'

const CanvasPage = () => {
  return (
   <>
     <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [2, 2, 2] } }>
        <Physics>
        
        <Lights />
       <Experience />
       </Physics>
     </Canvas>
   </>
  )
}

export default CanvasPage
