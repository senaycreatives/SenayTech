import React, { useState } from 'react'
import './App.css'

export default function Project() {
    const [catagory,setcatagory]=useState('ReactNative')
  return (
    <div className='min-h-screen w-full'>
        <div className=' w-[80%] flex justify-center items-center'>
        <div className='flex flex-row items-center mt-3'>
<div onClick={()=>setcatagory('ReactNative')} className={`h-[30px] cursor-pointer  hover:bg-indigo-500 ${catagory==='ReactNative' && 'bg-indigo-700'} w-[120px] rounded-full flex items-center justify-center bg-opacity-50 bg-indigo-300`}>
    <p className='text-white font-semibold'>ReactNative</p>
</div>
<div onClick={()=>setcatagory('Django')} className={`h-[30px] w-[120px] cursor-pointer hover:bg-indigo-500 rounded-full bg-opacity-50 ${catagory==='Django' && 'bg-indigo-700'} bg-indigo-300 ml-3 flex items-center justify-center `}>
    <p className='text-white font-semibold'>Django</p>
</div>
<div onClick={()=>setcatagory('React')} className={`h-[30px] w-[120px] cursor-pointer hover:bg-indigo-500 rounded-full ${catagory==='React' && 'bg-indigo-700'}  bg-opacity-50 bg-indigo-300 ml-3 flex items-center justify-center`}>
    <p className='text-white font-semibold'>React</p>
</div>
<div onClick={()=>setcatagory('Nodejs')} className={`h-[30px] w-[120px] cursor-pointer hover:bg-indigo-500 rounded-full ${catagory==='Nodejs' && 'bg-indigo-700'} bg-opacity-50 bg-indigo-300 ml-3 flex items-center justify-center`}>
    <p className='text-white font-semibold'>Nodejs</p>
</div>
            </div>
        </div>
        <div className=' w-[80%] flex justify-center items-center'>
            <p className='text-white font-bold text-3xl mt-3'>Explore our projects</p>
        </div>
        <div className='myscroll w-[80%]  overflow-x-scroll  flex flex-row ml-[100px] mt-10 h-[380px] '>
            <div className='h-[330px] shrink-0 w-[280px]  rounded-md  overflow-hidden  border-opacity-15 mx-4'>
                <div className='h-180] w-[280px]'>
                    <img src={"https://picsum.photos/280/180"} className=' rounded-xl overflow-hidden  w-[280px] h-[180px]'/>
                </div>
                <div>
                    <p className='text-white font-bold text-xl mt-3'> Project-Senay Shop  </p>
                    <p className='text-gray-400 font-semibold '> senay shop is online ecommerce website </p>
                    <div className='h-[40px] w-[80%] flex items-center justify-center rounded-full bg-opacity-50 bg-indigo-300 mt-3'>
                        <p className='text-white font-semibold'>Read More</p>
                    </div>
                </div>
            </div>
            <div className='h-[330px] shrink-0 w-[280px]  rounded-md  overflow-hidden  border-opacity-15 mx-4'>
                <div className='h-180] w-[280px]'>
                    <img src={"https://picsum.photos/280/180"} className=' rounded-xl overflow-hidden  w-[280px] h-[180px]'/>
                </div>
                <div>
                    <p className='text-white font-bold text-xl mt-3'> Project-Senay Shop  </p>
                    <p className='text-gray-400 font-semibold '> senay shop is online ecommerce website </p>
                    <div className='h-[40px]  cursor-pointer  w-[80%] flex items-center justify-center rounded-full bg-opacity-50 bg-indigo-300 mt-3'>
                        <p className='text-white font-semibold'>Read More</p>
                    </div>
                </div>
            </div>
            <div className='h-[330px] shrink-0 w-[280px]  rounded-md  overflow-hidden  border-opacity-15 mx-4'>
                <div className='h-180] w-[280px]'>
                    <img src={"https://picsum.photos/280/180"} className=' rounded-xl overflow-hidden  w-[280px] h-[180px]'/>
                </div>
                <div>
                    <p className='text-white font-bold text-xl mt-3'> Project-Senay Shop  </p>
                    <p className='text-gray-400 font-semibold '> senay shop is online ecommerce website </p>
                    <div className='h-[40px] w-[80%] flex items-center justify-center rounded-full bg-opacity-50 bg-indigo-300 mt-3'>
                        <p className='text-white font-semibold'>Read More</p>
                    </div>
                </div>
            </div>
            <div className='h-[330px] shrink-0 w-[280px]  rounded-md  overflow-hidden  border-opacity-15 mx-4'>
                <div className='h-180] w-[280px]'>
                    <img src={"https://picsum.photos/280/180"} className=' rounded-xl overflow-hidden  w-[280px] h-[180px]'/>
                </div>
                <div>
                    <p className='text-white font-bold text-xl mt-3'> Project-Senay Shop  </p>
                    <p className='text-gray-400 font-semibold '> senay shop is online ecommerce website </p>
                    <div className='h-[40px] w-[80%] flex items-center justify-center rounded-full bg-opacity-50 bg-indigo-300 mt-3'>
                        <p className='text-white font-semibold'>Read More</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
