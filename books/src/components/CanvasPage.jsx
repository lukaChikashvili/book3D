import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'

const CanvasPage = () => {
  return (
   <>
     <Canvas >
        <Lights />
       <Experience />
     </Canvas>
   </>
  )
}

export default CanvasPage
