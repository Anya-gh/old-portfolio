import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Landing from './pages/home/Landing'
import Showcase from './pages/showcase/Showcase'
import Contact from './pages/contact/Contact'
import { AnimatePresence } from 'framer-motion'
import * as data from '../public/data.json'

function App() {

  const location = useLocation();
  const [landingAnimation, setLandingAnimation] = useState({initial: {}, animate: {}, exit: {}})
  const [showcaseAnimation, setShowcaseAnimation] = useState({initial: {}, animate: {}, exit: {}})
  const [aboutAnimation, setAboutAnimation] = useState({initial: {}, animate: {}, exit: {}})
  const [contactAnimation, setContactAnimation] = useState({initial: {}, animate: {}, exit: {}})

  useEffect(() => {
    setLandingAnimation({initial: {opacity: 0, y: "100%"}, animate: {opacity: 1, transition: {duration: 0.5}, y: 0}, exit: {y: "-100%", opacity: 0, transition: {duration: 0.5}}})
    setShowcaseAnimation({initial: {opacity: 0, y: "100%"}, animate: {opacity: 1, transition: {duration: 0.5}, y: 0}, exit: {opacity: 0, transition: {duration: 0.5}}})
    setAboutAnimation({initial: {opacity: 0, x: "-100%"}, animate: {opacity: 1, transition: {duration: 0.5}, x: 0}, exit: {opacity: 0, transition: {duration: 0.5}}})
    setContactAnimation({initial: {opacity: 0, x: "100%"}, animate: {opacity: 1, transition: {duration: 0.5}, x: 0}, exit: {opacity: 0, transition: {duration: 0.5}}})
  }, [])


  const [filteredTags, setFilteredTags] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState(data['projects'])
  
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Landing landingAnimation={landingAnimation} setLandingAnimation={setLandingAnimation} showcaseAnimation={showcaseAnimation} setShowcaseAnimation={setShowcaseAnimation} aboutAnimation={aboutAnimation} setAboutAnimation={setAboutAnimation} contactAnimation={contactAnimation} setContactAnimation={setContactAnimation} filteredTags={filteredTags} setFilteredTags={setFilteredTags} setFilteredProjects={setFilteredProjects}/>} />
          <Route path='/showcase' element={<Showcase landingAnimation={landingAnimation} setLandingAnimation={setLandingAnimation} showcaseAnimation={showcaseAnimation} setShowcaseAnimation={setShowcaseAnimation} aboutAnimation={aboutAnimation} setAboutAnimation={setAboutAnimation} contactAnimation={contactAnimation} setContactAnimation={setContactAnimation} filteredTags={filteredTags} setFilteredTags={setFilteredTags} filteredProjects={filteredProjects} setFilteredProjects={setFilteredProjects}/>}/>
          <Route path='/contact' element={<Contact landingAnimation={landingAnimation} setLandingAnimation={setLandingAnimation} showcaseAnimation={showcaseAnimation} setShowcaseAnimation={setShowcaseAnimation} aboutAnimation={aboutAnimation} setAboutAnimation={setAboutAnimation} contactAnimation={contactAnimation} setContactAnimation={setContactAnimation}/>} />
          <Route path='/about' element={<About landingAnimation={landingAnimation} setLandingAnimation={setLandingAnimation} showcaseAnimation={showcaseAnimation} setShowcaseAnimation={setShowcaseAnimation} aboutAnimation={aboutAnimation} setAboutAnimation={setAboutAnimation} contactAnimation={contactAnimation} setContactAnimation={setContactAnimation}/>} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App