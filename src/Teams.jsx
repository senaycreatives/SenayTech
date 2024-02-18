import React from 'react'
import ProfileCard from './ProfileCard'
import andipic from './assets/andi.jpg'

export default function Teams() {
  return (
    <div className='min-h-screen w-full'>
        <div className=' w-full h-[50px] border-b-2 mt-[50px] mb-[50px]  border-white border-opacity-15'>
            <p className='text-white font-bold text-3xl'>OUR TEAMS</p>
        </div>
    <div  class="  flex font-medium items-center flex-wrap  ">
    
       <ProfileCard image={"https://api.lorem.space/image/face?w=120&h=120&hash=bart8"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
       <ProfileCard image={"https://api.lorem.space/image/face?w=120&h=120&hash=brt89fe"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
       <ProfileCard image={"https://api.lorem.space/image/face?w=120&h=120"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
       <ProfileCard image={"https://api.lorem.space/image/face?w=120&h=120&hash=bart89f"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
       <ProfileCard image={"https://api.lorem.space/image/face?w=120&h=120&hash=bart8e"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
    </div></div>
  )
}
