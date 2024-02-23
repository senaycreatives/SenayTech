import React from 'react'


import UseFetchBlogDetails from "./Hooks/UseFetchBlogDetails";

export default function BlogDetailsPage({ id }) {
  const { data, isLoading, error } = UseFetchBlogDetails(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{data.Title}</h1>
      <p>{data.Description}</p>
      {/* Additional blog post details */}
    </div>
  );
}
// export default function BlogsDetails() {
//   return (
//     <div className='min-h-screen w-full flex justify-center'>
//         <div className=' w-[98%]  flex justify-between    items-center  mt-[20px] mb-[50px]    border-opacity-15'>
//             <div className='w-[70%]  flex  items-center h-full flex-col '>
//                 <div className='relative flex  flex-col items-center h-[300px] w-full'>
//             <img src={"https://picsum.photos/600/200"} className='w-[100%] bg-slate-100 rounded-lg overflow-hidden h-[300px]'/>
         
//          <p className=' text-white font-bold  text-4xl absolute bottom-[20px]  left-0'> The Future Of Web Development</p>
  
//             </div>
//           <p className=' text-white  text-justify mt-5'>I will discuss about web development and its future. Web development is one of the most important aspect of the internet. If we talk about the internet, we will find that it has no official language but we can use html, css and JavaScript to make a webpage. So, we can say that web development is the art of creating webpages using these three languages. With the help of these languages, we can create a static website. But, we can also create a dynamic website using server-side programming like Java, Python, PHP, JavaScript and many more. With the help of these languages, we can create a website that interacts with the user. But, with the advancements of technology we can also create a website that interacts with the user and also with other devices. So, we can say that web development is the art of creating dynamic websites using HTML, CSS, JavaScript, server-side programming and other technologies.</p>

// <p className=' text-white  text-justify mt-5'>But, with the advancements of technology we can also create a website that interacts with the user and also with other devices. For example, we can use web sockets to communicate with the server and also with the other devices. So, we can say that web development is the art of creating dynamic websites using HTML, CSS, JavaScript, server-side programming and other technologies. With the help of these technologies we can also create a website that can send emails, can retrieve data from databases, can send data to databases and can even communicate with other devices. So, we can say that web development is the art of creating dynamic websites using HTML, CSS, JavaScript, server-side programming and other technologies. With the help of these technologies we can also create a website that can send emails, can retrieve data from databases, can send data to databases and can even communicate with other devices.</p>

// <div className='w-full h-[50px]  justify-end  my-2  flex-row flex items-center mt-7  px-[100px] rounded-md'>
//     <div className='h-[50px]  flex items-center justify-center flex-row  mx-5 '>
//         <p className='italic text-white mx-2'>233</p>
//     <svg class="h-8 w-8 text-white "  viewBox="0 0 24 24"  fill="white"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    
//     </div>
//     <div className='h-[50px]  flex items-center justify-center flex-row  mx-5 '>
//         <p className='italic text-white mx-2'>233</p>
//         <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
//     </div>
// </div>

//             </div>
            
//             <div className='w-[30%] h-full '>
//             <div className=' w-[80%]  flex justify-between     mt-[0px] mb-[10px]   pl-[20px]  border-opacity-15'>
//             <p className='text-white font-bold text-2xl pb-2'>Related Topics</p>
           
        
// </div>
// <div className='w-[90%] h-[50px] border-2 border-white border-opacity-10 my-2  flex-row flex items-center justify-center rounded-md mb-2'>
//     <img src={"https://picsum.photos/50/50"} className='w-[50px] mx-2 h-[50px] bg-black rounded-md '/>
//     <p className='text-white  w-[80%] overflow-hidden text-ellipsis text-nowrap'>Advanced Mern Stack development strategies</p>
// <p className='  text-white font-bold mx-2 text-lg'>&gt;
// </p>
// </div>
// <div className='w-[90%] h-[50px] border-2 border-white border-opacity-10 my-2  flex-row flex items-center justify-center rounded-md mb-2'>
//     <img src={"https://picsum.photos/50/50"} className='w-[50px] mx-2 h-[50px] bg-black rounded-md '/>
//     <p className='text-white  w-[80%] overflow-hidden text-ellipsis text-nowrap'>Advanced Mern Stack development strategies</p>
// <p className='  text-white font-bold mx-2 text-lg'>&gt;
// </p>
// </div>
// <div className='w-[90%] h-[50px] border-2 border-white border-opacity-10 my-2  flex-row flex items-center justify-center rounded-md mb-2'>
//     <img src={"https://picsum.photos/50/50"} className='w-[50px] mx-2 h-[50px] bg-black rounded-md '/>
//     <p className='text-white  w-[80%] overflow-hidden text-ellipsis text-nowrap'>Advanced Mern Stack development strategies</p>
// <p className='  text-white font-bold mx-2 text-lg'>&gt;
// </p>
// </div>

//             </div>
//         </div>
//     </div>
//   )
// }
