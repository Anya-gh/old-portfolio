import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import TagList from '../../components/TagList'
import FunctionLink from "../../components/FunctionLink"
import { AnimatorProps } from "../../components/Animation"
import { Dispatch, SetStateAction, useEffect } from "react"
import squirtle from '../../images/squirtle_shades.jpg'

interface LandingProps extends AnimatorProps {
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>,
}

export default function Landing( {landingAnimation, setLandingAnimation, showcaseAnimation, setShowcaseAnimation, aboutAnimation, setAboutAnimation, contactAnimation, setContactAnimation, filteredTags, setFilteredTags} : LandingProps) {

  useEffect(() => {
    setFilteredTags([])
  }, [])

  const location = useLocation()

  return (
    <>
    <motion.div
    key={location.pathname}
    initial={landingAnimation.initial}
    animate={landingAnimation.animate}
    exit={landingAnimation.exit}
    className="h-screen overflow-scroll w-screen p-6 flex flex-col justify-between items-center"
    >
      <div className='w-full flex flex-col md:flex-row justify-between md:w-[50rem] md:px-10 items-center'>
        <span className="md:order-2 flex justify-center">
          <img src={squirtle} alt="profile" className="py-5 px-5 hover:scale-105 transition duration-200 h-40 md:h-72"/>
        </span>
        <div className='text-center md:order-1 md:w-80 md:text-left md:mr-10'>
          <h1 className="font-bold text-6xl md:text-9xl">Anya</h1>
          <h2 className="text-amber-400 font-bold text-base leading-8 md:text-4xl">Software Engineer</h2>
          <p className="">First class Computer Science MEng graduate from University of Warwick. Looking for work in software development.</p> 
        </div>
      </div>
    
      <span className="md:w-[50rem] md:px-10 p-2 justify-center"><TagList filteredTags={filteredTags} setFilteredTags={setFilteredTags} redirect={true}/></span>
      <div className="flex flex-row justify-between md:w-[50rem] w-full md:px-10">
        <FunctionLink link={'/about'} name={'ABOUT'} exitAnimation={landingAnimation} setExitAnimation={setLandingAnimation} initialAnimation={aboutAnimation} setInitialAnimation={setAboutAnimation} newExit={{x: "100%", opacity: 0, transition: {duration: 0.5}}} direction=" rotate-90" newInitial={{opacity: 0, x: "-100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}}/>
        <FunctionLink link={'/showcase'} name={'PROJECTS'} exitAnimation={landingAnimation} setExitAnimation={setLandingAnimation} initialAnimation={showcaseAnimation} setInitialAnimation={setShowcaseAnimation} newExit={{y: "-100%", opacity: 0, transition: {duration: 0.5}}} direction="" newInitial={{opacity: 0, y: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, y: 0}}/>
        <FunctionLink link={'/contact'} name={'CONTACT'} exitAnimation={landingAnimation} setExitAnimation={setLandingAnimation} initialAnimation={contactAnimation} setInitialAnimation={setContactAnimation} newExit={{x: "-100%", opacity: 0, transition: {duration: 0.5}}} direction=" -rotate-90" newInitial={{opacity: 0, x: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}}/>
      </div>
    </motion.div>
    
    </>
  )
}
