
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Hjem from "./pages/Hjem"
import Kunst from "./pages/Kunst"
import Ommig from "./pages/Ommig"
import Footer from './components/Footer'
import { ThemeProvider, useTheme } from '@mui/material'
import { customTheme } from "../src/themes/themes";




function App() {
  const outerTheme = useTheme();

  return (
    <>
      <ThemeProvider theme={customTheme(outerTheme)} className='container'>
        <div >
          
        <Nav/>
        
        <Routes>
          <Route path="/" element={<Hjem className="Hjem" />} />
          <Route path="/kunst" element={<Kunst/>} />
          <Route path="/ommig" element={<Ommig/>} />
          <Route path="*" element={<Hjem/>} />


        </Routes>

        </div>
      </ThemeProvider>
      <Footer/> 
    </>
  )
}

export default App
