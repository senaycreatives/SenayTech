import React from 'react'
import { Link } from 'react-router-dom'
import UsefetchUserDetails from './Hooks/UseFetchUser'

export default function BlogCard({blog}) {
  const {data,isLoading,error} = UsefetchUserDetails(blog?.Author)
  return (
    <Link  to={`/blogdetails/${blog?._id}`} className='  group sm:w-[80%] cursor-pointer hover:bg-black hover:bg-opacity-5   flex-row flex justify-between    mt-[50px] mb-[50px]  sm:pl-[100px]  border-opacity-15'>
    <div className='text-white max-w-[80%] flex flex-col'>
    <p className=' mb-2 font-bold text-[14px] italic  text-gray-300'>
        By {data?.data?.username}
    </p>
    
    <p className='text-white font-bold text-xl mb-2 group-hover:text-orange-300 ' >{blog?.Title}</p>
    
    <p className='text-gray-300 line-clamp-3 '>{blog?.Description} </p>
    </div>
    <div >
        <img src={blog?.image}  className=' shrink-0 sm:w-[300px] w-[100px] h-[100px] sm:h-[200px]'/>
    
    </div>
    
     </Link>
  )
}
