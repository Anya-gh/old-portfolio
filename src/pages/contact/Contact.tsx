import { motion } from 'framer-motion'
import FunctionLink from '../../components/FunctionLink'
import { AnimatorProps } from '../../components/Animation'
import email_icon from '../../images/icons8-email-50.png'
import github_icon from '../../images/github-mark-white.png'
import linkedin_icon from '../../images/LI-In-Bug.png'
import { useEffect } from 'react'

function Contact( {landingAnimation, setLandingAnimation, showcaseAnimation, setShowcaseAnimation, aboutAnimation, setAboutAnimation, contactAnimation, setContactAnimation} : AnimatorProps ) {

  useEffect(() => {
    document.title = "Anya's Portfolio - Contact"
  })
  
  return (
    <>
    <motion.div 
    key={location.pathname}
    initial={contactAnimation.initial}
    animate={contactAnimation.animate}
    exit={contactAnimation.exit}
    className="h-screen overflow-hidden w-screen p-6 flex flex-col justify-between items-center"
    >
      <div className='md:w-[50rem] md:px-10'>
        <h1 className="text-6xl font-bold md:text-9xl">Contact</h1>
        <p className="leading-none ">If you want to talk about anything at all, don't hesitate to get in touch!</p>
      </div>
      <div className='flex flex-col items-center'>
        <Link title="Email" icon={email_icon} text="anya2718@icloud.com" link="mailto:anya2718@icloud.com"/>
        <Link title="Github" icon={github_icon} text="github.com/Anya-gh" link="github.com/Anya-gh"/>
        <Link title="LinkedIn" icon={linkedin_icon} text="https://www.linkedin.com/in/aniket-singh-806b5525a/" link="https://www.linkedin.com/in/aniket-singh-806b5525a/"/>
      </div>

      <div className="flex flex-row justify-between md:px-10 md:w-[50rem] w-full">
        <FunctionLink link={'/'} name={'HOME'} exitAnimation={contactAnimation} setExitAnimation={setContactAnimation} newExit={{x: "100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={landingAnimation} setInitialAnimation={setLandingAnimation} newInitial={{opacity: 0, x: "-100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}} direction=" rotate-90"/>
        <FunctionLink link={'/showcase'} name={'PROJECTS'} exitAnimation={contactAnimation} setExitAnimation={setContactAnimation} newExit={{y: "-100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={showcaseAnimation} setInitialAnimation={setShowcaseAnimation} newInitial={{opacity: 0, y: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, y: 0}} direction=""/>
        <FunctionLink link={'/about'} name={'ABOUT'} exitAnimation={contactAnimation} setExitAnimation={setContactAnimation} newExit={{x: "-100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={aboutAnimation} setInitialAnimation={setAboutAnimation} newInitial={{opacity: 0, x: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}} direction=" -rotate-90"/>
      </div>
    </motion.div>
    </>
  )
}

interface LinkProps {
  title: string,
  icon: string,
  link: string,
  text: string
}

const Link = ( {title, icon, link, text} : LinkProps) => {
  return (<>
    <a href={link}><div className='h-24 w-60 border-2 rounded-xl justify-center items-center flex flex-col opacity-70 lg:hover:opacity-100 lg:hover:scale-110 transition duration-200 my-5 md:w-[30rem]'>
      <div className='flex flex-row items-center mt-2'>
        <img src={icon} alt={title} className='h-8'/>
        <h1 className='font-bold text-3xl mx-2'>{title}</h1>
      </div>
      <p className='text-xs px-2'>{text}</p>
    </div></a>
  </>)
  
}

export default Contact