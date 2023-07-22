import { motion } from 'framer-motion'
import FunctionLink from '../../components/FunctionLink'
import { AnimatorProps } from '../../components/Animation'
import grad_hat from '../../images/grad_hat.png'
import book from '../../images/book.png'
import sakura from '../../images/icons8-sakura-48.png'

function About( {landingAnimation, setLandingAnimation, showcaseAnimation, setShowcaseAnimation, aboutAnimation, setAboutAnimation, contactAnimation, setContactAnimation} : AnimatorProps) {
  return (
    <>
    <motion.div 
    key={location.pathname}
    initial={aboutAnimation.initial}
    animate={aboutAnimation.animate}
    exit={aboutAnimation.exit}
    className="px-60 flex flex-col justify-between h-screen py-10 overflow-hidden w-screen"
    >
      <div>
        <h1 id='showcase' className="text-9xl font-bold">About</h1>
        <p className="text-lg leading-none">Here's some cool stuff about me I think you should know!</p>
      </div>
      <div className='h-full overflow-scroll mt-5'>
        <div className='mb-20'>
          <h1 className='font-bold text-6xl border-b-2 mb-2 w-fit'>Education</h1>
          <div className='flex flex-row justify-between mt-5 mb-5'>
            <div><span className='flex flex-row items-center'><img src={grad_hat} alt='education' className='h-10 invert mr-2'/><h2 className='font-bold text-4xl'>University of Warwick</h2></span><p className='font-bold text-xl text-slate-500'>2019-2023</p></div>
            <p className='text-xl'>MEng - 1st</p>
          </div>
          <div className='flex flex-row justify-between'>
            <div><span className='flex flex-row items-center'><img src={book} alt='education' className='h-10 invert mr-2'/><h2 className='font-bold text-4xl'>Northampton School for Boys</h2></span><p className='italic text-xl'>Maths, Further Maths, Computer Science</p><p className='font-bold text-xl text-slate-500'>2017 - 2019</p></div>
            <p className='text-xl'>A-Levels - A*, A*, A*</p>
          </div>
          <div className='flex flex-col'>
            <span className='text-blue-500'><a href="https://www.flaticon.com/free-icons/education" title="education icons">Education icons created by Freepik - Flaticon</a></span>
            <span className='text-blue-500'><a href="https://www.flaticon.com/free-icons/book" title="book icons">Book icons created by Good Ware - Flaticon</a></span>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-6xl border-b-2 mb-2 w-fit'>Personal</h1>
            <div className='mt-5 mb-10'>
              <span className='flex flex-row items-center'><img src={sakura} alt='japan' className='h-10 mr-2'/><h2 className='font-bold text-4xl'>Japanese</h2></span>
              <p>I started learning Japanese in high school, but started taking it more seriously in university. I took two courses, one in my second year and again in my third year. I finished with my proficiency equivalent to N3 on the Japanese Language Proficiency Test (JLPT). I would have continued into my fourth year, but felt a little overwhelmed with my workload. I've now started learning it again, and hope to achieve N1 eventually.</p>
            </div>
            {/*<div className='mt-5 mb-5'>
            <span className='flex flex-row items-center'><img src='../../../public/images/icons8-canvas-48.png' alt='japan' className='h-10 mr-2'/><h2 className='font-bold text-4xl'>Art</h2></span>
              <p>I've been learning art slowly for the past few months. I don't have anything to show yet, but I'm making steady progress. Taking on art has been a learning experience, and has forced me into a lot of great habits. Whilst the slow, gradual progress is frustrating at times, it's an important reminder to not get too attached to an end goal, and it's certainly benefitted me in other parts of life. I've always been passionate about story-telling, and art appears to be the best medium for me to do that, so I'll keep at it; hopefully there'll be stuff I can show off here in a few months!</p>
            </div>*/}
            <div className='flex flex-col'>
              <span><a target="_blank" href="https://icons8.com/icon/36887/sakura" className='text-blue-500'>Sakura</a> icon by <a target="_blank" href="https://icons8.com" className='text-blue-500'>Icons8</a></span>
              <span><a target="_blank" href="https://icons8.com/icon/3uUsBYyGd39C/easel" className='text-blue-500'>Canvas</a> icon by <a target="_blank" href="https://icons8.com" className='text-blue-500'>Icons8</a></span>
            </div>
            
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <FunctionLink link={'/contact'} name={'CONTACT'} exitAnimation={aboutAnimation} setExitAnimation={setAboutAnimation} newExit={{x: "100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={contactAnimation} setInitialAnimation={setContactAnimation} newInitial={{opacity: 0, x: "-100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}} direction=" rotate-90"/>
        <FunctionLink link={'/showcase'} name={'PROJECTS'} exitAnimation={aboutAnimation} setExitAnimation={setAboutAnimation} newExit={{y: "-100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={showcaseAnimation} setInitialAnimation={setShowcaseAnimation} newInitial={{opacity: 0, y: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, y: 0}} direction=""/>
        <FunctionLink link={'/'} name={'HOME'} exitAnimation={aboutAnimation} setExitAnimation={setAboutAnimation} newExit={{x: "-100%", opacity: 0, transition: {duration: 0.5}}} initialAnimation={landingAnimation} setInitialAnimation={setLandingAnimation} newInitial={{opacity: 0, x: "100%"}} newAnimate={{opacity: 1, transition: {duration: 0.5}, x: 0}} direction=" -rotate-90"/>
      </div>
    </motion.div>
    </>
  )
}

export default About