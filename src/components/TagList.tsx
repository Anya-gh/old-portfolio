import { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import * as data from '../data.json'
import Tag from "./Tag"

export type Tags = {
  headers: {color: string, name: string}[],
  tools: {color: string, name: string}[]
}

interface TagListProps {
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>,
  redirect: boolean,
}

const tags = data['tags']

export default function TagList( {filteredTags, setFilteredTags, redirect} : TagListProps) {

  const navigate = useNavigate()

  const onClickHandler = (name: string) => {
    if (filteredTags.includes(name)) { setFilteredTags(currentTags => currentTags.filter(tag => tag != name)) }
    else { setFilteredTags(currentTags => [...currentTags, name]) }
    if (redirect) {
      navigate('/showcase')
    }
  }

  return (
    <>
      <div className='flex flex-col justify-between'>
        <ul className="flex flex-row justify-between list-none mb-3">
          {tags.headers.map(tag => {
            const text_color = filteredTags.includes(tag.name) ? 'brightness-125 text-white' : 'text-black'
            return <button className= {text_color + "  transition duration-200 hover:text-white cursor-pointer hover:scale-110 active:scale-125"} key={tag.name} name={tag.name} onClick={() => onClickHandler(tag.name)}><Tag color={tag.color} name={tag.name}/></button>
          })}
        </ul>
        <ul className="flex flex-row justify-between list-none">
          {tags.tools.map(tag => {const text_color = filteredTags.includes(tag.name) ? 'brightness-125 text-white' : 'text-black'
            return <button className= {text_color + " transition duration-200 hover:text-white cursor-pointer hover:scale-110 active:scale-125"} key={tag.name} onClick={() => onClickHandler(tag.name)}><Tag color={tag.color} name={tag.name}/></button>
          })}
        </ul>
      </div>
    </>
  )
}