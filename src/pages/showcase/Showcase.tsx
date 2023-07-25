import { motion } from "framer-motion"
import FunctionLink from "../../components/FunctionLink"
import TagList from "../../components/TagList"
import ShowcaseProjects from "./ShowcaseProjects"
import { AnimatorProps } from "../../components/Animation"
import { Dispatch, SetStateAction } from "react"
import type { Projects } from "./ShowcaseProjects"

interface ShowcaseProps extends AnimatorProps {
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>,
  filteredProjects: Projects[],
  setFilteredProjects: Dispatch<SetStateAction<Projects[]>>
}


export default function Showcase( {landingAnimation, setLandingAnimation, showcaseAnimation, setShowcaseAnimation, aboutAnimation, setAboutAnimation, contactAnimation, setContactAnimation, filteredTags, setFilteredTags, filteredProjects, setFilteredProjects} : ShowcaseProps ) {

  return (
    <>
    <motion.div 
    key={location.pathname}
    initial={showcaseAnimation.initial}
    animate={showcaseAnimation.animate}
    exit={showcaseAnimation.exit}
    className="h-screen overflow-hidden w-screen p-6 flex flex-col justify-between items-center"
    >
      <div className='w-full flex flex-col md:w-[50rem] md:px-10'>
        <h1 className="font-bold text-6xl md:text-9xl">Projects</h1>
        <p>Here are some projects I've worked on; click on a tag to filter projects.</p>
        <TagList filteredTags={filteredTags} setFilteredTags={setFilteredTags} redirect={false}/>
      </div>
      <ShowcaseProjects filteredTags={filteredTags} filteredProjects={filteredProjects} setFilteredProjects={setFilteredProjects}/>
      <div className="flex flex-row justify-between md:w-[50rem] md:px-10 w-full">
        <FunctionLink link={'/about'} name={'ABOUT'} exitAnimation={showcaseAnimation} setExitAnimation={setShowcaseAnimation} newExit={{x: "100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={aboutAnimation} setInitialAnimation={setAboutAnimation} newInitial={{opacity: 0, x: "-100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}} direction=" rotate-90"/>
        <FunctionLink link={'/'} name={'HOME'} exitAnimation={showcaseAnimation} setExitAnimation={setShowcaseAnimation} newExit={{y: "100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={landingAnimation} setInitialAnimation={setLandingAnimation} newInitial={{opacity: 0, y: "-100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, y: 0}} direction=" rotate-180"/>
        <FunctionLink link={'/contact'} name={'CONTACT'} exitAnimation={showcaseAnimation} setExitAnimation={setShowcaseAnimation} newExit={{x: "-100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={contactAnimation} setInitialAnimation={setContactAnimation} newInitial={{opacity: 0, x: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}} direction=" -rotate-90"/>
      </div>
    </motion.div>
    </>
    
    
  )
}
