import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Lights from './Lights'
import { Physics } from '@react-three/rapier'
import Hero from './Hero'

const CanvasPage = () => {
  return (
   <>
     <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [3.5, 1, 4] } }>
        <Physics>
        
        <Lights />
       <Experience />
       </Physics>
     </Canvas>

     <div className='absolute top-0 left-0 w-full h-screen'>
       <Hero />
     </div>
   </>
  )
}

export default CanvasPage
