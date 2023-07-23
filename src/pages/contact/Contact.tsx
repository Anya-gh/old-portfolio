import { motion } from 'framer-motion'
import FunctionLink from '../../components/FunctionLink'
import { AnimatorProps } from '../../components/Animation'
import email_icon from '../../images/icons8-email-50.png'
import github_icon from '../../images/github-mark-white.png'
import linkedin_icon from '../../images/LI-In-Bug.png'

function Contact( {landingAnimation, setLandingAnimation, showcaseAnimation, setShowcaseAnimation, aboutAnimation, setAboutAnimation, contactAnimation, setContactAnimation} : AnimatorProps ) {
  return (
    <>
    <motion.div 
    key={location.pathname}
    initial={contactAnimation.initial}
    animate={contactAnimation.animate}
    exit={contactAnimation.exit}
    className='px-[17.5vw] flex flex-col justify-between h-screen py-10 overflow-hidden w-screen'
    >
      <div>
        <h1 id='showcase' className="text-9xl font-bold">Contact</h1>
        <p className="text-lg leading-none">Here's where you can reach me!</p>
      </div>
      <div className='flex flex-col items-center'>
        <Link title="Email" icon={email_icon} text="anya2718@icloud.com" link="mailto:anya2718@icloud.com"/>
        <Link title="Github" icon={github_icon} text="github.com/Anya-gh" link="github.com/Anya-gh"/>
        <Link title="LinkedIn" icon={linkedin_icon} text="https://www.linkedin.com/in/aniket-singh-806b5525a/" link="https://www.linkedin.com/in/aniket-singh-806b5525a/"/>
      </div>

      <div className="flex flex-row justify-between">
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
    <a href={link}><div className='h-20 w-[30rem] border-2 rounded-xl items-center flex flex-col opacity-70 hover:opacity-100 hover:scale-110 transition duration-200 my-5'>
      <div className='flex flex-row items-center mt-2'>
        <img src={icon} alt={title} className='h-8'/>
        <h1 className='font-bold text-3xl mx-2'>{title}</h1>
      </div>
      <p>{text}</p>
    </div></a>
  </>)
  
}

export default Contact