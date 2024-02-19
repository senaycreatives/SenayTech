import React from 'react'
import ProfileCard from './ProfileCard'


export default function Teams() {
  return (
    <div className='min-h-screen w-full'>
        <div className=' w-full h-[50px] border-b-2 mt-[50px] mb-[50px]  border-white border-opacity-15'>
            <p className='text-white font-bold text-3xl'>OUR TEAMS</p>
        </div>
    <div  class="  flex font-medium items-center flex-wrap  ">
    
       <ProfileCard image={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
       <ProfileCard image={"https://images.pexels.com/photos/220451/pexels-photo-220451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
       <ProfileCard image={"https://images.pexels.com/photos/220423/pexels-photo-220423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
       <ProfileCard image={" https://images.pexels.com/photos/220458/pexels-photo-220458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
       <ProfileCard image={" https://images.pexels.com/photos/220445/pexels-photo-220445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} firstname="Loream" lastname={"Ipsum"} role="Software Engineer" company="SenayTech"/>
    </div></div>
  )
}
