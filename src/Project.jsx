import React, { useEffect, useState } from 'react'
import './App.css'
import UseFetchCatagory from './Hooks/UseFetchCatagory'
import UseFetchProject from './Hooks/UseFetchProject'
import UseFetchProjectWithCatagory from './Hooks/UseFetchProjectWithCatagory'

export default function Project() {
    const [catagory,setcatagory]=useState('ReactNative')
    const {data,error,isLoading}=UseFetchCatagory()
    const [selectedcatagory,setselectedcatagory]=useState(data?.data[0]._id)
    const  {data:project,error:err,isLoading:loading,refetch}=UseFetchProjectWithCatagory(selectedcatagory)

    useEffect(()=>{
        const selectDefault=()=>{
            setselectedcatagory(data?.data[0]._id)
        }
    selectDefault()
    },[data])
  useEffect(()=>{
    refetch()
  },[selectedcatagory])
  return (
    <div className='min-h-screen w-full'>
        <div className=' w-[80%] flex justify-center items-center'>
        <div className='flex flex-row items-center mt-3'>
        {isLoading&&
      <div className='w-full flex justify-center'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</div>

      }
            {
                data?.data.map((item)=>{
                    return(
                        <div onClick={()=>setselectedcatagory(item._id)} className={`h-[30px] cursor-pointer  hover:bg-indigo-500 ${selectedcatagory===item._id && 'bg-orange-900'} w-[120px] rounded-full flex items-center justify-center mx-2 bg-opacity-50 bg-indigo-300`}>
    <p className='text-white font-semibold'>{item.Name}</p>
</div>
                    )
                })
            }


            </div>
        </div>
        <div className=' sm:w-[80%] flex justify-center items-center'>
            <p className='text-white font-bold text-3xl mt-3'>Explore our projects</p>
        </div>
        <div className='myscroll sm:w-[80%]  overflow-x-scroll  flex flex-row sm:ml-[100px] mt-10 h-[380px] '>
        {loading&&
      <div className='w-full flex justify-center'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</div>

      }
      {project?.data.length ===0 &&
      <div className='w-full flex justify-center'>
        <p className='text-white  text-md mt-3'>No Project Found</p>
        </div>

      }
           {project?.data.map((item)=>{
               return(
                <div className='h-[330px] shrink-0 w-[280px]  rounded-md  overflow-hidden  border-opacity-15 mx-4'>
                <div className='h-180] w-[280px]'>
                    <img src={item.image} className=' rounded-xl overflow-hidden  w-[280px] h-[180px]'/>
                </div>
                <div>
                    <p className='text-white font-bold text-xl mt-3'> {item.Title}  </p>
                    <p className='text-gray-400 font-semibold '> {item.Description} </p>
                    <div className='h-[40px] w-[80%] flex items-center justify-center rounded-full bg-opacity-50 bg-indigo-300 mt-3'>
                        <p className='text-white font-semibold'>Read More</p>
                    </div>
                </div>
            </div>
                 
               )
           })}
          
        </div>
    </div>
  )
}
