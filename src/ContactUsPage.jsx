import React, { useState } from 'react';

const ContactUsPage = () => {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [message,setMessage]=useState()

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className="flex flex-col items-center justify-center h-screen  sm:w-[450px] w-full  ">
      <div className="max-w-10xl w-full p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-white mb-4 font-bold">Contact Us</h2>
        <form>
          <div className="mb-4" >
            <label htmlFor="name" className="block text-white font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              required
              onChange={e=>setName(e.target.value)}
              value={name}
              id="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              required
              id="email"
              onChange={e=>setEmail(e.target.value)}
              value={email}
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              onChange={e=>setMessage(e.target.value)}
              required
              value={message}
              className="border border-gray-300 rounded-md px-3 py-2 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <a href={`mailto:${'info@senaycreatives.com'}?subject=${name}&body=${message}`}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </a>
        </form>
      </div>
    </div>
    </div>
  
  );
};

export default ContactUsPage;