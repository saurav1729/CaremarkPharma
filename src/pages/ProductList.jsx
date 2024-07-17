import React from 'react'
import ProductContainer from '../components/ProductContainer'
import { medList } from '../utils/db'
import { useEffect } from 'react'

const Product = () => {
  useEffect(()=>{
    window.scrollTo(0,0)

},[])
  return (
    <div><ProductContainer cardData={medList} page={'product'} /></div>
  )
}

export default Product