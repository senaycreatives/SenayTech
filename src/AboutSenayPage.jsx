import React from 'react'

export default function AboutSenayPage() {
  return (
    <div className=' w-full min-h-screen'>
        <div className=' w-full   mt-[50px] mb-[50px]  sm:pl-[100px]  border-opacity-15'>
            <p className='text-white font-bold text-3xl pb-2'>About SenayCreatives</p>
            <p className='text-red-100  ml-2 text-[14px] '>Learn more about SenayCreatives Vision and Mission</p>
        </div>
        <div className=' w-full mt-[50px] mb-[50px]  sm:pl-[100px]  border-opacity-15 '>
            <p className='text-gray-200  ml-2  text-[15px] pb-2 sm:w-[83%] font-semibold   space-y-2'>
                Senay Creatives is a tech company that develops web and mobile applications. We have been working on web and mobile application development for 10 years.our Team is dedicated to provide web and mobile application development.
            </p>
        </div>
        <div className=' w-full   mt-[50px] mb-[50px]  sm:pl-[100px]  border-opacity-15'>
            <p className='text-white font-bold text-2xl pb-2'>Our Technology Stack</p>
            <div className='flex flex-row w-full items-center mt-3 overflow-x-auto'>
<div className='h-[40px] w-[120px] rounded-full shrink-0 flex items-center justify-center bg-opacity-20 bg-slate-500'>
    <p className='text-white font-semibold'>ReactNative</p>
</div>
<div className='h-[40px] w-[120px] rounded-full shrink-0 bg-opacity-20 bg-slate-500 ml-3 flex items-center justify-center '>
    <p className='text-white font-semibold'>Django</p>
</div>
<div className='h-[40px] w-[120px] rounded-full shrink-0 bg-opacity-20 bg-slate-500 ml-3 flex items-center justify-center'>
    <p className='text-white font-semibold'>React</p>
</div>
<div className='h-[40px] w-[120px] rounded-full shrink-0 bg-opacity-20 bg-slate-500 ml-3 flex items-center justify-center'>
    <p className='text-white font-semibold'>Nodejs</p>
</div>
            </div>
                </div>
                <div className=' w-full   mt-[50px] mb-[50px]  sm:pl-[100px]  border-opacity-15'>
            <p className='text-white font-bold text-2xl pb-2 ml-1'>Our Mission</p>
         
            <p  className='text-gray-200 text-[15px] pb-2  ml-2 sm:w-[83%] mt-[20px] font-semibold   space-y-2'>Our Mission is to provide fast and secure web and mobile application development. 
             </p>

           
                </div>

                <div className=' w-full   mt-[50px] mb-[50px]  sm:pl-[100px]  border-opacity-15'>
            <p className='text-white font-bold text-2xl pb-2'>Our Vision</p>
         
            <p className='text-gray-200 text-[15px] pb-2  ml-2 sm:w-[83%] mt-[20px] font-semibold   space-y-2'>Our Vision is to be the best tech start up for international and local to build our most branding and to make the most creative projects that we can do for our clients.
             </p>

           
                </div>
    </div>
  )
}
