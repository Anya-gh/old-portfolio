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
    className="px-60 flex flex-col justify-between h-screen py-10 overflow-hidden w-screen"
    >
      <div className="pb-5">
        <h1 id='showcase' className="text-9xl font-bold m-0">Projects</h1>
        <p className="text-lg leading-none m-0">{"Here are some projects I've worked on; click on a tag to filter projects."}{/*For some of my favourite projects, I have a dedicated page that you can reach by clicking on them - feel free to take a look!*/}</p>
      </div>
      <TagList filteredTags={filteredTags} setFilteredTags={setFilteredTags} redirect={false}/>
      <ShowcaseProjects filteredTags={filteredTags} filteredProjects={filteredProjects} setFilteredProjects={setFilteredProjects}/>
      <div className="flex flex-row justify-between">
        <FunctionLink link={'/about'} name={'ABOUT'} exitAnimation={showcaseAnimation} setExitAnimation={setShowcaseAnimation} newExit={{x: "100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={aboutAnimation} setInitialAnimation={setAboutAnimation} newInitial={{opacity: 0, x: "-100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}} direction=" rotate-90"/>
        <FunctionLink link={'/'} name={'HOME'} exitAnimation={showcaseAnimation} setExitAnimation={setShowcaseAnimation} newExit={{y: "100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={landingAnimation} setInitialAnimation={setLandingAnimation} newInitial={{opacity: 0, y: "-100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, y: 0}} direction=" rotate-180"/>
        <FunctionLink link={'/contact'} name={'CONTACT'} exitAnimation={showcaseAnimation} setExitAnimation={setShowcaseAnimation} newExit={{x: "-100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={contactAnimation} setInitialAnimation={setContactAnimation} newInitial={{opacity: 0, x: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}} direction=" -rotate-90"/>
      </div>
    </motion.div>
    </>
    
    
  )
}
