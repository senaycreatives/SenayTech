import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard() {
  return (
    <Link  to={'/blogdetails'} className=' group w-[80%] cursor-pointer hover:bg-black hover:bg-opacity-5   flex-row flex justify-between    mt-[50px] mb-[50px]  pl-[100px]  border-opacity-15'>
    <div className='text-white flex flex-col'>
    <p className=' mb-2 font-bold text-[14px] italic  text-gray-300'>
        By Haile
    </p>
    
    <p className='text-white font-bold text-xl mb-2 group-hover:text-orange-300 ' >The Future Of Web Development</p>
    
    <p className='text-gray-300 '>the advancment of Web Development in  2022 with the help of artificial intelligence </p>
    </div>
    <div >
        <img src={"https://picsum.photos/300/200"}  className=' w-[300px] h-[200px]'/>
    
    </div>
    
                       </Link>
  )
}
