import React from 'react'
import bottom from '../assets/bottom.svg'
import Card from './Card'
import cardData from '../utils/db.js'


const ProductContainer = () => {


  return (
    <div className='h-auto w-screen bg-[#0e1538] '>
      <div className='h-[17rem] w-screen'></div>
      <div className='text-[#043CAA] ml-6 text-[2rem] text-600 font-semibold flex-col justify-center items-center'> <span>Our Medicine</span><img className='ml-7' src={bottom}></img> </div>
      <div className='h-auto w-[90%] flex justify-around mx-auto mt-[5rem] flex-wrap gap-9 gap-y-[5rem]'>
      {cardData.map((event, index) => (
                <div  key={index}>
                  <Card
                   data={event}
                  />
                </div>
              ))}
      </div>

    </div>
  )
}

export default ProductContainer