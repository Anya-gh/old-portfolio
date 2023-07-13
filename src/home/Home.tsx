import React from "react"

export default function Home() {

  return (
    <>
      <div className="flex flex-row justify-between mx-60 my-28">
        <div className="w-96">
          <div className="mb-20">
            <h1 className="text-9xl font-bold">Anya</h1>
            <h2 className="text-amber-400 text-4xl font-bold">Software Engineer</h2>
          </div>
          <p className="text-3xl leading-none">First class Computer Science MEng graduate from University of Warwick.</p> 
          <p className="text-3xl leading-none">Looking for work in software development.</p>
        </div>
        <img src={'../../public/images/squirtle_shades.jpg'} alt={"profile"}/>
      </div>
      <div className='flex flex-col justify-between mx-60 my-28'>
        <ul className="list-disc">
          <li className="flex flex-row justify-between mb-3">
            <p className="bg-fuchsia-500 p-2 rounded-xl font-bold mx-3">WEB DEVELOPMENT</p>
            <p className="bg-indigo-500 p-2 rounded-xl font-bold">MACHINE LEARNING</p>
            <p className="bg-sky-500 p-2 rounded-xl font-bold">DATA PROCESSING</p>
            <p className="bg-teal-500 p-2 rounded-xl font-bold">ALGORITHM DESIGN</p>
          </li>
        </ul>
      </div>
    </>
  )
}