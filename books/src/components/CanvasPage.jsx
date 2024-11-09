import { Canvas } from '@react-three/fiber'

const CanvasPage = () => {
  return (
   <>
     <Canvas >
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
     </Canvas>
   </>
  )
}

export default CanvasPage
