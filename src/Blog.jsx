import React from 'react'
import BlogCard from './BlogCard'


export default function blog() {
  return (
    <div className='min-h-screen w-full'>
          <div className=' w-[80%]  flex justify-between   items-center  mt-[50px] mb-[50px]  pl-[100px]  border-opacity-15'>
            <p className='text-white font-bold text-3xl pb-2'>Featured Blog</p>
            <div className='h-[37px] w-[120px] rounded-full bg-opacity-50 bg-slate-500 ml-3 flex items-center justify-center'>
    <p className='text-white font-semibold'>Read More</p>
</div>
                   </div>
                   <BlogCard/>
                   <div className=' w-[80%]  flex justify-between   items-center  mt-[50px] mb-[50px]  pl-[100px]  border-opacity-15'>
            <p className='text-white font-bold text-3xl pb-2'>Recent Blog</p>
            <div className='h-[37px] w-[120px] rounded-full bg-opacity-50 bg-slate-500 ml-3 flex items-center justify-center'>
    <p className='text-white font-semibold'>get More</p>
</div>
                   </div>
                <BlogCard/>
                 <BlogCard/>

    </div>
  )
}
