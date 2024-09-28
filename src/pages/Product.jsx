import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import productData from '../utils/productData.json'
import PrimaryContainer from '../components/Product/PrimaryContainer'
import DetailSection from '../components/Product/DetailSection'


const Product = () => {
    useEffect(()=>{
        window.scrollTo(0,0)

    },[])
    
    const{productId}=useParams();
    console.log(productId);
    const {products}=productData;
    const data = products.find((data)=>data.id===productId);
    console.log("data of product",data);
  return (
    <div className='min-h-screen pt-[13rem] pb-[5rem] bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0]'>
      <PrimaryContainer primaryData={data.primaryData}/>
      <DetailSection detaledData={data.description}/>
    </div>
  )
}

export default Product


//primarycontainer