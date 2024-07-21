import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import productData from '../utils/productData.json'
import PrimaryContainer from '../components/Product/PrimaryContainer'


const Product = () => {
    useEffect(()=>{
        window.scrollTo(0,0)

    },[])
    
    const{productId}=useParams();
    console.log(productId);
    console.log(productData);
    const {products}=productData;
    const data = products.find((data)=>data.id===productId);
    console.log(data);
  return (
    <div className='min-h-screen pt-[14rem]'>
      <PrimaryContainer/>
     {/* <div>{data.name}</div>
     <div>{data.availability}</div>
     <div>{data.composition}</div> */}
     {/* <div>{data.details}</div> */}
     {/* <div>{data.price}</div> */}
     {/* <div>{data.package_size}</div>
     <div>{data.manufacturer}</div> */}

    </div>
  )
}

export default Product


//primarycontainer