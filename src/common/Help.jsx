import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Help = () => {
  const [text, setText] = useState("")
  useEffect(() => {
    fetch('/help.txt').then(res => res.text()).then(text => setText(text))
  }, [])
  return (
    <>
      <div className='w-2/3 bg-black text-white p-5 overflow-y-scroll'>
        <p className='text-white'>{text}</p>
      </div>
      <Link to = "/home" className = "w-1/2 h-[64px]"><button className='w-full text-white'>Ok</button></Link>
    </>
  )
}
