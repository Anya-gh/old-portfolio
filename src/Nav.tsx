import {FC} from 'react'

export default function Nav() {
  return (
      <ul className="mx-10 my-10 justify-evenly flex flex-row list-none font-black border-b-2 pb-12 border-gray-600">
        <NavElement name={"Home"} />
        <NavElement name={"About"} />
        <NavElement name={"Projects"} />
        <NavElement name={"Education"} />
      </ul>
  )
}

interface NavElementProps {
  name: string
}

const NavElement:FC<NavElementProps> = (props) => {
  return (
    <>
      {/* I think it would be better to just change the color instead */}
      <li><button className="hover:text-sky-600 text-4xl italic cursor-pointer transition-colors duration-300">{props.name}</button></li>
    </>
  )
} 
