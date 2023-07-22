import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import TagList from '../../components/TagList'
import FunctionLink from "../../components/FunctionLink"
import { AnimatorProps } from "../../components/Animation"
import { Dispatch, SetStateAction } from "react"
import { Projects } from "../showcase/ShowcaseProjects"

interface LandingProps extends AnimatorProps {
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>,
  setFilteredProjects: Dispatch<SetStateAction<Projects[]>>
}

export default function Landing( {landingAnimation, setLandingAnimation, showcaseAnimation, setShowcaseAnimation, aboutAnimation, setAboutAnimation, contactAnimation, setContactAnimation, filteredTags, setFilteredTags, setFilteredProjects} : LandingProps) {

  const location = useLocation()

  return (
    <>
    <motion.div
    key={location.pathname}
    initial={landingAnimation.initial}
    animate={landingAnimation.animate}
    exit={landingAnimation.exit}
    className="px-60 flex flex-col justify-between h-screen py-10 overflow-hidden w-screen"
    >
      <div className="flex flex-row justify-between">
        <div className="w-96">
          <div className="mb-20">
            <h1 className="text-9xl font-bold">Anya</h1>
            <h2 className="text-amber-400 text-4xl font-bold">Software Engineer</h2>
          </div>
          <p className="text-3xl leading-none">First class Computer Science MEng graduate from University of Warwick.</p> 
          <p className="text-3xl leading-none">Looking for work in software development.</p>
        </div>
        <div>
          <img src={'../../images/squirtle_shades.jpg'} alt={"profile"} className="transition duration-300 hover:scale-105"/>
        </div>
      </div>
      <TagList filteredTags={filteredTags} setFilteredTags={setFilteredTags} setFilteredProjects={setFilteredProjects} redirect={true}/>
      <div className="flex flex-row justify-between">
        <FunctionLink link={'/about'} name={'ABOUT'} exitAnimation={landingAnimation} setExitAnimation={setLandingAnimation} initialAnimation={aboutAnimation} setInitialAnimation={setAboutAnimation} newExit={{x: "100%", opacity: 0, transition: {duration: 0.5}}} direction=" rotate-90" newInitial={{opacity: 0, x: "-100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}}/>
        <FunctionLink link={'/showcase'} name={'PROJECTS'} exitAnimation={landingAnimation} setExitAnimation={setLandingAnimation} initialAnimation={showcaseAnimation} setInitialAnimation={setShowcaseAnimation} newExit={{y: "-100%", opacity: 0, transition: {duration: 0.5}}} direction="" newInitial={{opacity: 0, y: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, y: 0}}/>
        <FunctionLink link={'/contact'} name={'CONTACT'} exitAnimation={landingAnimation} setExitAnimation={setLandingAnimation} initialAnimation={contactAnimation} setInitialAnimation={setContactAnimation} newExit={{x: "-100%", opacity: 0, transition: {duration: 0.5}}} direction=" -rotate-90" newInitial={{opacity: 0, x: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}}/>
      </div>
    </motion.div>
    
    </>
  )
}
