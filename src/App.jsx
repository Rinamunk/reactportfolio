
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Hjem from "./pages/Hjem"
import Kunst from "./pages/Kunst"
import Ommig from "./pages/Ommig"
import Footer from './components/Footer'




function App() {

  return (
    <>
      <div className='container'>
        <div >
          
        <Nav/>
        
        <Routes>
          <Route path="/" element={<Hjem className="Hjem" />} />
          <Route path="/kunst" element={<Kunst/>} />
          <Route path="/ommig" element={<Ommig/>} />


        </Routes>

        </div>
      </div>
      <Footer/> 
    </>
  )
}

export default App
