import React from 'react'


import UseFetchBlogDetails from "./Hooks/UseFetchBlogDetails";
import { Link, useParams } from 'react-router-dom';
import UseFetchBlogs from './Hooks/UseFetchBlogs';
import AdsComponent from './AdsenseComponent';

export default function BlogDetailsPage() {
  const { id } = useParams();
  
  const { data, isLoading, error } = UseFetchBlogDetails(id);
  const { data: data2, isLoading: isLoading2, error: error2 } = UseFetchBlogs()



  if (error) {
    return <div className='w-full flex justify-center items-center'>
 <p>{error.message}</p>
</div>;
  }




  return (
    <div className='min-h-screen w-full flex justify-center'>
      <AdsComponent dataAdSlot='f08c47fec0942fa0' />
      
        <div className=' w-[98%]  flex justify-between  sm:flex-row flex-col  items-center  mt-[20px] mb-[50px]    border-opacity-15'>
            <div className='sm:w-[70%]  flex  items-center h-full flex-col '>
              {isLoading && <div className='w-full flex h-[400px] justify-center items-center'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</div>}
{data?.data&&<>
                <div className='relative flex  flex-col items-center h-[300px] w-full'>
            <img src={data?.data.image} className='w-[100%] bg-slate-800 rounded-lg overflow-hidden h-[300px]'/>
         
         <p className=' text-white font-bold  text-4xl absolute bottom-[20px] backdrop:blur-md bg-black bg-opacity-50  rounded-md left-0 px-4'>{data?.data.Title}</p>
  
            </div>
          <p className=' text-white  text-justify mt-5'>{data?.data.content}</p>
</>}
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
            
            <div className='sm:w-[30%] h-full '>
            <div className=' w-[80%]  flex justify-between     mt-[0px] mb-[10px]   pl-[20px]  border-opacity-15'>
            <p className='text-white font-bold text-2xl sm:mt-0 mt-4 pb-2'>Related Topics</p>
           
        
</div>
{isLoading2 && <div className='w-full flex justify-center items-center'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</div>}
{data2?.data.slice(0,5).map((item)=>{
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