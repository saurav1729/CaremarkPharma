import React from 'react'
import bottom from '../assets/bottom.svg'
import Card from './Card'
// import cardData from '../utils/db.js'
import Carousel from './Carousel.jsx';
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { MdHeight } from 'react-icons/md';







const ProductContainer = ({cardData,page}) => {
  const style1={
    height:"15rem",
    width:"15rem"
  }
  
  const style2={
    height:"20rem",
    width:"20rem"
  }
  
  const style=page=='product'?style1:style2;


  return (
    <div className=" relative h-auto  pb-[3rem] w-screen  bg-gradient-to-r from-blue-400 to-blue-600 pt-[12rem] overflow-x-hidden  ">
   
   
     <div className='w-full flex justify-center items-center '>

     <div className="text-[#ffffff90]   ml-6 text-[3.4rem] text-600 font-semibold flex-col justify-center items-center">
        {" "}
        <span>Our Medicine</span>
        <img className="mx-auto w-[13rem]" src={bottom}></img>{" "}
      </div>
     </div>
  
     <div className='h-[20rem] w-[20rem] bg-[#00ff1190] rounded-full blur-[120px] absolute top-[0%] left-[-18%]'></div>
     <div className='h-[20rem] w-[20rem] bg-[#00ff1190] rounded-full blur-[120px] absolute top-[0%] right-[-10%]'></div>
     <div className='h-[20rem] w-[20rem] bg-[#00ff1190] rounded-full blur-[120px] absolute bottom-[0%] left-[-18%]'></div>
     <div className='h-[20rem] w-[20rem] bg-[#00ff1190] rounded-full blur-[120px] absolute bottom-[0%] right-[-10%]'></div>
      {page=="product"?(
        <div className="h-auto w-[90%] mx-auto mt-[5rem] grid grid-cols-4 gap-4 z-10  ">
  

        {cardData.map((event, index) => (
     <div key={event.id}>
         <Link to={'/medicines/'+event.id}>
       <Card data={event} customStyle={style} />
       </Link>
     </div>
   ))}

 </div>
      ):(<>
      <div className="h-auto w-[90%] mx-auto mt-[5rem] grid grid-cols-3 gap-3 z-10  ">
  

             {cardData.map((event, index) => (
          <div key={event.id}>
            <Link to={'/medicines/'+event.id}>
            <Card data={event} customStyle={style} page={page} />
            </Link>
          </div>
        
        ))}
     
      </div>
          <Link to="/medicines">
          <div className='w-full h-[5rem] flex  justify-center items-center'>
              <div className='text-[2rem] text-white font-sans font-semibold cursor-pointer flex justify-center items-center gap-3 '>see all<FaLongArrowAltRight/></div>
            </div>
            </Link>
            </>
      
    )
      
}
  
    </div>

  );
}

export default ProductContainer