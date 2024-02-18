import React from 'react'


export default function ProfileCard({image,firstname,lastname,role,company}) {
  return (
    <div class="w-[300px] backdrop-filter backdrop-blur-lg bg-opacity-15  h-[450px] mx-[20px] my-[20px] flex flex-col  rounded-2xl  overflow-hidden  shadow-lg shadow-gray-800   shrink-0">
  
    <div class=" w-full h-[300px] ">
        <img src={image} class=" w-full h-full " alt="profile picture" srcset=""/>
    </div>

    <div class=" w-full   ">
    <div class="mt-[2px] ">
            <h2 class="text-white font-bold text-xl tracking-wide">{firstname} <br/> {lastname}</h2>
        </div>
   
    <p class="text-blue-400 font-semibold mt-[1px]" >
   {role}
        </p>
        <p class="text-gray-400 font-semibold ]" >
          {company}
        </p>
        </div>



</div>
  )
}
