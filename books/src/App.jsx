import { Route, Routes } from "react-router-dom"
import CanvasPage from "./components/CanvasPage"
import Header from "./components/Header"
import Catalog from "./components/Catalog"


function App() {

  
  return (
    <>
      <Header />

      
      <Routes>
        <Route path="/" element = {<CanvasPage />} />
        <Route path="/books" element = {<Catalog />} />
      </Routes>
    </>
  )
}

export default App
