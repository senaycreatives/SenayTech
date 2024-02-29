import React, { useState } from 'react'
import logo from './assets/logo.jpg'
import { Link } from 'react-router-dom'
export default function HeaderComponent() {
        const [ open, setOpen ]=useState(false)
        
  return (
<header className=' w-full '>
    <nav class=" border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" class="flex items-center">
                <img src={logo} class="mr-3 h-9 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-white text-xl font-semibold whitespace-nowrap kaushan-script-regular dark:text-white">SenayCreatives</span>
            </a>
            <div class="flex items-center lg:order-2">
              {/* <a  class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 border-2 focus:outline-none focus:ring-primary-800">Hire Us</a> */}
               <a href="mailto:${info@senaycreatives.com" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-400 to-blue-500   hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2 transition-all ease-in duration-75 text-white bg-slate-700 dark:bg-gray-900 rounded-md ">
Hire Us
</span>
</a>
                <button onClick={() => setOpen(!open)} data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class={` ${open ? 'block' : 'hidden'} duration-1000  transform justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                         <Link  to="/"  class="block py-2 pr-4 pl-3 hover:text-orange-400 text-white rounded bg-primary-700  lg:bg-transparent lg:text-white lg:p-0 dark:text-white" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link  to="team" class="block py-2 pr-4 pl-3 hover:text-orange-400 text-white rounded bg-primary-700  lg:bg-transparent lg:text-white lg:p-0 dark:text-white">Team</Link>
                    </li>
                    <li>
                         <Link  to="aboutsenay"  class="block py-2 pr-4 pl-3 hover:text-orange-400 text-white rounded bg-primary-700  lg:bg-transparent lg:text-white lg:p-0 dark:text-white">Company</Link>
                    </li>
                    <li>
                         <Link  to="project"  class="block py-2 pr-4 pl-3 hover:text-orange-400 text-white rounded bg-primary-700  lg:bg-transparent lg:text-white lg:p-0 dark:text-white">Projects</Link>
                    </li>
                    <li>
                         <Link  to="blog"  class="block py-2 pr-4 pl-3 hover:text-orange-400 text-white rounded bg-primary-700  lg:bg-transparent lg:text-white lg:p-0 dark:text-white">Blogs</Link>
                    </li>
                  
                    <li>
                         <Link  to="contact"  class="block py-2 pr-4 pl-3 hover:text-orange-400 text-white rounded bg-primary-700  lg:bg-transparent lg:text-white lg:p-0 dark:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}
