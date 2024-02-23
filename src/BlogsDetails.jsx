import React from 'react'


import UseFetchBlogDetails from "./Hooks/UseFetchBlogDetails";
import { Link, useParams } from 'react-router-dom';
import UseFetchBlogs from './Hooks/UseFetchBlogs';

export default function BlogDetailsPage() {
  const { id } = useParams();
  
  const { data, isLoading, error } = UseFetchBlogDetails(id);
  const { data: data2, isLoading: isLoading2, error: error2 } = UseFetchBlogs()

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }




  return (
    <div className='min-h-screen w-full flex justify-center'>
        <div className=' w-[98%]  flex justify-between    items-center  mt-[20px] mb-[50px]    border-opacity-15'>
            <div className='w-[70%]  flex  items-center h-full flex-col '>
                <div className='relative flex  flex-col items-center h-[300px] w-full'>
            <img src={data.data.image} className='w-[100%] bg-slate-800 rounded-lg overflow-hidden h-[300px]'/>
         
         <p className=' text-white font-bold  text-4xl absolute bottom-[20px] backdrop:blur-md bg-black bg-opacity-50  rounded-md left-0'> The Future Of Web Development</p>
  
            </div>
          <p className=' text-white  text-justify mt-5'>{data.data.content}</p>

{/* 
<div className='w-full h-[50px]  justify-end  my-2  flex-row flex items-center mt-7  px-[100px] rounded-md'>
    <div className='h-[50px]  flex items-center justify-center flex-row  mx-5 '>
        <p className='italic text-white mx-2'>233</p>
    <svg class="h-8 w-8 text-white "  viewBox="0 0 24 24"  fill="white"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    
    </div>
    <div className='h-[50px]  flex items-center justify-center flex-row  mx-5 '>
        <p className='italic text-white mx-2'>233</p>
        <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    </div>
</div> */}

            </div>
            
            <div className='w-[30%] h-full '>
            <div className=' w-[80%]  flex justify-between     mt-[0px] mb-[10px]   pl-[20px]  border-opacity-15'>
            <p className='text-white font-bold text-2xl pb-2'>Related Topics</p>
           
        
</div>
{data2?.data.map((item)=>{
  return (
    <Link to={`/blogdetails/${item._id}`} className='w-[90%] h-[50px] border-2 border-white border-opacity-10 my-2  flex-row flex items-center justify-center rounded-md mb-2'>
    <img src={item.image} className='w-[50px] mx-2 h-[50px] bg-black rounded-md '/>
    <p className='text-white  w-[80%] overflow-hidden text-ellipsis text-nowrap'>{item.Title}</p>
<p className='  text-white font-bold mx-2 text-lg'>&gt;
</p>
</Link>
  )
})}



            </div>
        </div>
    </div>
  )

  }