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