import React from 'react'
import About from './about/About'
import Home from './home/Home'
import Projects from './projects/Projects'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App