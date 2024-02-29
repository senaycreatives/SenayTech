import React from 'react'
import BlogCard from './BlogCard'
import UseFetchBlogs from './Hooks/UseFetchBlogs'
import UseFetchFeaturedBlog from './Hooks/UseFetchFeaturedBlog'


export default function blog() {
  const {error,data,isLoading}=UseFetchBlogs()
  const {error:error2,data:data2,isLoading:isLoading2}=UseFetchFeaturedBlog()
  return (
    <div className='min-h-screen w-full'>
     
          <div className=' sm:w-[80%]   flex justify-between   items-center  mt-[50px] mb-[50px]  sm:pl-[100px]  border-opacity-15'>
            <p className='text-white font-bold text-3xl pb-2'>Featured Blog</p>
            <div className='h-[37px] w-[120px] rounded-full bg-opacity-50 bg-slate-500 ml-3 flex items-center justify-center'>
    <p className='text-white font-semibold'>Read More</p>
</div>
                   </div>
                   {isLoading2&&     <div className='w-full flex justify-center'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</div>}
{data2?.data.map((item)=>{
  return(
    <BlogCard blog={item} />
  )
})}
{data2?.data.length===0&&
<div className='w-full flex justify-center'>
    <p className='text-white text-md'>No Featured Blog Found</p>
</div>}

              
                   <div className=' sm:w-[80%]   flex justify-between   items-center  mt-[50px] mb-[50px]  sm:pl-[100px]  border-opacity-15'>
            <p className='text-white font-bold text-3xl pb-2'>Recent Blog</p>
            <div className='h-[37px] w-[120px] rounded-full bg-opacity-50 bg-slate-500 ml-3 flex items-center justify-center'>
    <p className='text-white font-semibold'>get More</p>
</div>
                   </div>
                   {isLoading&&
      <div className='w-full flex justify-center'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</div>

      }
                   {data?.data.slice(0,5).map((blog)=>{
                    return(
                      <BlogCard key={blog._id} blog={blog}/>
                    )
                   })}
              

    </div>
  )
}
