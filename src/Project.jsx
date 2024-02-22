import React, { useState } from 'react'
import './App.css'
import UseFetchCatagory from './Hooks/UseFetchCatagory'
import UseFetchProject from './Hooks/UseFetchProject'

export default function Project() {
    const [catagory,setcatagory]=useState('ReactNative')
    const {data,error,isLoading}=UseFetchCatagory()
    const  {data:project,error:err,isLoading:loading}=UseFetchProject()
  return (
    <div className='min-h-screen w-full'>
        <div className=' w-[80%] flex justify-center items-center'>
        <div className='flex flex-row items-center mt-3'>
            {
                data?.data.map((item)=>{
                    return(
                        <div onClick={()=>setcatagory('ReactNative')} className={`h-[30px] cursor-pointer  hover:bg-indigo-500 ${catagory==='ReactNative' && 'bg-indigo-700'} w-[120px] rounded-full flex items-center justify-center mx-2 bg-opacity-50 bg-indigo-300`}>
    <p className='text-white font-semibold'>{item.Name}</p>
</div>
                    )
                })
            }


            </div>
        </div>
        <div className=' w-[80%] flex justify-center items-center'>
            <p className='text-white font-bold text-3xl mt-3'>Explore our projects</p>
        </div>
        <div className='myscroll w-[80%]  overflow-x-scroll  flex flex-row ml-[100px] mt-10 h-[380px] '>
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
