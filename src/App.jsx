
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hjem from "./pages/Hjem"
import Footer from './components/Footer'
import { ThemeProvider, useTheme } from '@mui/material'
import { customTheme } from "../src/themes/themes";




function App() {
  const outerTheme = useTheme();

  return (
    <>
      <ThemeProvider theme={customTheme(outerTheme)} className='container'>
        <div >

        
        <Routes>
          <Route path="/" element={<Hjem className="Hjem" />} />
          <Route path="*" element={<Hjem/>} />


        </Routes>

        </div>
      </ThemeProvider>
      <Footer/> 
    </>
  )
}

export default App
