import React from 'react'
import notFound from './../../assets/404/404.png'

export default function NotFound() {
  return (
    <>
    <div className="h-screen w-full relative">
      <div className="absolute bg-[#0F0E0E] h-screen w-full z-10"></div>
      <img src={notFound} alt="notfound"  className='w-full sm:w-[80%] h-screen mx-auto relative z-20'/>
    </div>
    </>
  )
}
