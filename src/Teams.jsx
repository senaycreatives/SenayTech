import React from 'react'
import ProfileCard from './ProfileCard'
import UseFetchTeams from './Hooks/UseFetchTeams'


export default function Teams() {
  const { data,error,isLoading}=UseFetchTeams()
  return (
    <div className='min-h-screen w-full'>
        <div className=' w-full h-[50px] border-b-2 mt-[50px] mb-[50px]  border-white border-opacity-15'>
            <p className='text-white font-bold text-3xl'>OUR TEAMS</p>
        </div>
    <div  class="  flex font-medium items-center flex-wrap  ">
    
    {data?.data.map((team)=>{
        return(
          <ProfileCard image={team?.Image} firstname={team?.Name} lastname={""} role={team?.Role} company="SenayTech"/>
  
        )
    })}
         </div></div>
  )
}
