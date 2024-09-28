import React from 'react'
import ProductContainer from '../components/ProductContainer'
import { cardData } from '../utils/db'
import { useEffect } from 'react'

const Product = () => {
  useEffect(()=>{
    window.scrollTo(0,0)

},[])
  return (
    <div><ProductContainer cardData={cardData} page={'product'} /></div>
  )
}

export default Product