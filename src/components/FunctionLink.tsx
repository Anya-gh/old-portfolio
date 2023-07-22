import { useNavigate } from "react-router-dom"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { Animator } from "./Animation"

interface functionProps {
  link: string,
  name: string,
  exitAnimation: Animator,
  setExitAnimation: Dispatch<SetStateAction<Animator>>,
  newExit: object,
  initialAnimation: Animator,
  setInitialAnimation: Dispatch<SetStateAction<Animator>>,
  newInitial: object,
  newAnimate: object,
  direction: string,
}

export default function FunctionLink({link, name, exitAnimation, setExitAnimation, newExit, initialAnimation, setInitialAnimation, newInitial, newAnimate, direction} : functionProps) {

  const navigate = useNavigate()
  const linkClicked = useRef(false)

  useEffect(() => {
    if (JSON.stringify(exitAnimation.exit) == JSON.stringify(newExit) && JSON.stringify(initialAnimation.initial) == JSON.stringify(newInitial) && JSON.stringify(initialAnimation.animate) == JSON.stringify(newAnimate) && linkClicked.current == true) {
      navigate(link)
    }
  }, [exitAnimation, initialAnimation])

  const OnClickHandler = () => {
    setExitAnimation(prevState => ({
      ...prevState,
      exit: newExit
    }))
    setInitialAnimation(prevState => ({
      ...prevState,
      initial: newInitial,
      animate: newAnimate
    }))
    linkClicked.current = true
  }

  return (
    <>
      <button className="flex flex-col bg-none border-none items-center self-center text-amber-400 tracking-widest font-medium transition hover:scale-105 cursor-pointer hover:brightness-125 duration-200" onClick={OnClickHandler}><p className="border-b-2 pb-2 mb-2">{name}</p><img className={"invert h-5 m-0" + direction} src={'../../images/down.png'} alt={'chevron'}/></button>
    </>
  )
}
