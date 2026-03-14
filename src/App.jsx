import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from "./components/Container"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

function App() {
  

  return (
    <div className="h-full bg-blue-50" >
     <Container>
      <Navbar/>
      <Hero/>
      </Container> 
      <div className="relative w-full">
      <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from neutral-300/50 via-neutral-200 to-transparent "></div> 
      <div className="max-w-7xl mx-auto p-4">
      <img className=" border border-neutral-200 shadow-md rounded-xl w-full object-cover object-left-top mask-b-from-20% to-40%" src="/hero-ui-v6.webp" alt="banner" width="1000" height="1000" />
      </div>
      </div>
    </div>
  )
}

export default App
