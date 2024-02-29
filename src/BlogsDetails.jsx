import React from 'react'


import UseFetchBlogDetails from "./Hooks/UseFetchBlogDetails";
import { Link, useParams } from 'react-router-dom';
import UseFetchBlogs from './Hooks/UseFetchBlogs';
import AdsComponent from './AdsenseComponent';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
export default function BlogDetailsPage() {
  const { id } = useParams();
  const code =`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exploring the Hidden Gems of Tuscany: A Journey through Italy's Heartland</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 0;
            
          }
          .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
               background-color: #f8f8f8;
          }
          h1, h2, h3, h4, h5, h6 {
              font-family: "Times New Roman", serif;
              margin-top: 20px;
          }
          p {
              margin-bottom: 20px;
          }
          img {
              max-width: 100%;
              height: auto;
              margin-bottom: 20px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Exploring the Hidden Gems of Tuscany: A Journey through Italy's Heartland</h1>
          
          <h2>The Charm of Tuscany</h2>
          <p>Nestled in the heart of central Italy, Tuscany captivates visitors with its rolling hills, vineyards, and medieval hilltop towns. Beyond its picturesque landscapes, Tuscany offers a glimpse into Italy's cultural heritage and traditional way of life.</p>
          
          <h2>Florence: The Cradle of the Renaissance</h2>
          <p>No trip to Tuscany is complete without a visit to Florence, the birthplace of the Renaissance. Wander through the narrow cobblestone streets of the historic center, marvel at masterpieces in the Uffizi Gallery, and admire the architectural splendor of the Duomo and Palazzo Vecchio.</p>
          
          <h2>Siena: A Medieval Masterpiece</h2>
          <p>Venture south to Siena, where time seems to stand still amidst its medieval charm. Explore the winding alleyways of the old town, visit the magnificent Siena Cathedral, and witness the thrilling Palio horse race in the Piazza del Campo, a tradition dating back centuries.</p>
          
          <h2>Chianti: Wine and Gastronomy</h2>
          <p>Escape to the rolling hills of the Chianti countryside, where vineyards and olive groves stretch as far as the eye can see. Sample world-class wines at family-run wineries, savor farm-to-table cuisine in rustic trattorias, and immerse yourself in the authentic flavors of Tuscany.</p>
          
          <h2>Lucca: A Hidden Gem</h2>
          <p>Discover the enchanting walled city of Lucca, tucked away amidst olive trees and Renaissance villas. Walk or bike along the city's ancient walls, explore its charming piazzas and churches, and indulge in a leisurely stroll through the lush Giardini Botanici.</p>
          
          <h2>Pienza: Renaissance Splendor</h2>
          <p>Step back in time to the Renaissance era in Pienza, a UNESCO World Heritage Site renowned for its architectural beauty and panoramic views of the Val d'Orcia. Explore the historic center, visit the stunning Palazzo Piccolomini, and sample the town's famous pecorino cheese.</p>
          
          <h2>Embrace the Tuscan Lifestyle</h2>
          <p>In Tuscany, life moves at a slower pace, allowing visitors to savor each moment and embrace the simple pleasures of la dolce vita. Whether it's sipping espresso at a sidewalk café, browsing local markets for artisanal goods, or watching the sunset over the Tuscan countryside, every experience is a celebration of the good life.</p>
          
          <h2>Conclusion</h2>
          <p>Tuscany beckons with its timeless beauty, cultural riches, and warm hospitality. As you explore its hidden gems and ancient wonders, you'll find yourself immersed in a world of art, history, and gastronomy unlike any other. So pack your bags, follow the winding roads, and let Tuscany cast its spell on you.</p>
      </div>
  </body>
  </html>
  
  `
  
  const { data, isLoading, error } = UseFetchBlogDetails(id);
  const { data: data2, isLoading: isLoading2, error: error2 } = UseFetchBlogs()



  if (error) {
    return <div className='w-full flex justify-center items-center'>
 <p>{error.message}</p>
</div>;
  }




  return (
    <div className='min-h-screen w-full flex justify-center'>
      <AdsComponent dataAdSlot='f08c47fec0942fa0' />
      
        <div className=' w-[98%]  flex justify-between  sm:flex-row flex-col  items-center  mt-[20px] mb-[50px]    border-opacity-15'>
            <div className='sm:w-[70%]  flex  items-center h-full flex-col '>
              {isLoading && <div className='w-full flex h-[400px] justify-center items-center'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</div>}
{data?.data&&<>
                <div className='relative flex  flex-col items-center h-[300px] w-full'>
            <img src={data?.data.image} className='w-[100%] bg-slate-800 rounded-lg overflow-hidden h-[300px]'/>
         
         <p className=' text-white font-bold  text-4xl absolute bottom-[20px] backdrop:blur-md bg-black bg-opacity-50  rounded-md left-0 px-4'>{data?.data.Title}</p>
  
            </div>
            
            <ReactQuill
   value={data?.data.content}
   readOnly={true}
   theme={"bubble"}
   
   className='bg-white'
/>
</>}
{/* 
<div className='w-full h-[50px]  justify-end  my-2  flex-row flex items-center mt-7  px-[100px] rounded-md'>
    <div className='h-[50px]  flex items-center justify-center flex-row  mx-5 '>
        <p className='italic text-white mx-2'>233</p>
    <svg class="h-8 w-8 text-white "  viewBox="0 0 24 24"  fill="white"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    
    </div>
    <div className='h-[50px]  flex items-center justify-center flex-row  mx-5 '>
        <p className='italic text-white mx-2'>233</p>
        <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
    </div>
</div> */}

            </div>
            
            <div className='sm:w-[30%] w-full h-full '>
            <div className=' sm:w-[80%] w-full  flex justify-between     mt-[0px] mb-[10px]   pl-[20px]  border-opacity-15'>
            <p className='text-white font-bold text-2xl sm:mt-0 mt-4 pb-2'>Related Topics</p>
           
        
</div>
{isLoading2 && <div className='w-full flex justify-center items-center'>
    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</div>}
{data2?.data.slice(0,5).map((item)=>{
  return (
    <Link to={`/blogdetails/${item._id}`} className='w-[90%] h-[50px] border-2 border-white border-opacity-10 my-2  flex-row flex items-center justify-center rounded-md mb-2'>
    <img src={item.image} className='w-[50px] mx-2 h-[50px] bg-black rounded-md '/>
    <p className='text-white  w-[80%] overflow-hidden text-ellipsis text-nowrap'>{item.Title}</p>
<p className='  text-white font-bold mx-2 text-lg'>&gt;
</p>
</Link>
  )
})}



            </div>
        </div>
    </div>
  )

  }