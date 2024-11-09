import { OrbitControls, useTexture } from '@react-three/drei'
import Book from './Book'
import frontImg from '../assets/front.jpg'
import backImg from '../assets/back.avif'
import edges from '../assets/edge.png'

const Experience = () => {
     
    

  return (
    <>
     <OrbitControls makeDefault />
      <Book  front = {frontImg} back={backImg} top = {edges} bottom = {edges} edge={edges} spine={edges} />
     </>
  )
}

export default Experience
