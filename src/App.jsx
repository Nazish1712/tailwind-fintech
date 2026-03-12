import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from "./components/Container"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <div className="h-screen">
     <Container>
      <Navbar/>
      </Container>    
    </div>
  )
}

export default App
