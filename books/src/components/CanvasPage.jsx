import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'
import { Physics } from '@react-three/rapier'

const CanvasPage = () => {
  return (
   <>
     <Canvas >
        <Physics>
        
        <Lights />
       <Experience />
       </Physics>
     </Canvas>
   </>
  )
}

export default CanvasPage
