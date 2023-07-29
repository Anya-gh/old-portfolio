import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Animator } from "./Animation"
import * as data from '../data.json'
import Tag from "./Tag"

export type Tags = {
  headers: {color: string, name: string}[],
  tools: {color: string, name: string}[]
}

interface TagListProps {
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>,
  link: string,
  exitAnimation: Animator,
  setExitAnimation: Dispatch<SetStateAction<Animator>>,
  newExit: object,
  initialAnimation: Animator,
  setInitialAnimation: Dispatch<SetStateAction<Animator>>,
  newInitial: object,
  newAnimate: object
}

const tags = data['tags']

export default function TagList( {filteredTags, setFilteredTags, link, exitAnimation, setExitAnimation, newExit, initialAnimation, setInitialAnimation, newInitial, newAnimate} : TagListProps) {

  const navigate = useNavigate()
  const tagClicked = useRef(false)

  const onClickHandler = (name: string) => {
    if (filteredTags.includes(name)) { setFilteredTags(currentTags => currentTags.filter(tag => tag != name)) /* this shouldn't fire*/}
    else { 
      setFilteredTags(currentTags => [...currentTags, name])
      setExitAnimation(prevState => ({
        ...prevState,
        exit: newExit
      }))
      setInitialAnimation(prevState => ({
        ...prevState,
        initial: newInitial,
        animate: newAnimate
      }))
      tagClicked.current = true
    }
  }

  useEffect(() => {
    if (JSON.stringify(exitAnimation.exit) == JSON.stringify(newExit) && JSON.stringify(initialAnimation.initial) == JSON.stringify(newInitial) && JSON.stringify(initialAnimation.animate) == JSON.stringify(newAnimate) && tagClicked.current == true) {
      navigate(link)
    }
  }, [exitAnimation, initialAnimation])

  return (
    <>
      <div className='flex flex-col justify-between'>
        <ul className="flex flex-row items-center list-none flex-wrap self-center">
          {tags.headers.map(tag => {
            const color =  filteredTags.includes(tag.name) ? tag.color + ' brightness-150 text-white' : tag.color + ' text-black'
            return <button className= "transition ease-in-out duration-200 lg:hover:text-white cursor-pointer lg:hover:scale-110 active:scale-125" key={tag.name} name={tag.name} onClick={() => onClickHandler(tag.name)}><Tag color={color} name={tag.name}/></button>
          })}
          {tags.tools.map(tag => {
            const color =  filteredTags.includes(tag.name) ? tag.color + ' brightness-150 text-white' : tag.color + ' text-black'
            return <button className="transition ease-in-out duration-200 lg:hover:text-white cursor-pointer lg:hover:scale-110 active:scale-125" key={tag.name} onClick={() => onClickHandler(tag.name)}><Tag color={color} name={tag.name}/></button>
          })}
        </ul>
      </div>
    </>
  )
}