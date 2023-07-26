import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainSlider from '../MainSlider/MainSlider'
import CategorySlider from '../CategorySlider/CategorySlider.tsx'
import { product } from '../Interface/ProductInter.ts'
import $ from 'jquery'
import { CartContext } from '../../Context/CartContext'
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
let {addToCart} =useContext(CartContext)

async function addProdToCart(productId){

  let {data} = await addToCart(productId)
console.log(data)
  if(data.status == "success"){
      console.log(data.message)
    toast.success(data.message,{duration:2000,className:'text-success'})
   
    }else{
      console.log("error")
      toast.error("error")
    
    }
  
}

  let baseUrl ="https://ecommerce.routemisr.com"
  let [productList,setProduct]= useState<product[]>([])
useEffect(()=>{
  getAllProducts()
},[])
 async function getAllProducts(){
let {data}=await axios.get(`${baseUrl}/api/v1/products`)
console.log(data.data);
setProduct(data.data);
$(".loading").fadeOut(1000)
  }
  return ( 
    <div className='container'>
    <MainSlider/>
  <CategorySlider/>

  <div className=' loading position-fixed top-0 start-0 end-0 bottom-0 bg-info  '>
<i className='fa-solid fa-spinner fa-spin fa-2xl'></i>
</div>
   <>
   <div className='row g-3 mt-5'>


{productList.map(    (product)=>{
  return   <div key={product._id} className='col-md-3 col-sm-4 col-lg-2 product '>
<Link to={"/productdetails/"+product._id}>
<div>
<img src={product.imageCover} alt="" className='w-100' />
<span className='text-success mt-2 genderEl'>{product.category.name}</span>
<h2 className='h6 fw-bold'>{product.title.split(" ").slice(0,2).join(" ")}</h2>
<div className='d-flex justify-content-between'>
<p className='text-muted priceEl'>{product.price}EGP</p>
<div className='rate'>
<i className='fa-solid fa-star text-warning'></i>{product.ratingsAverage}
</div>

</div>
  </div>
  </Link>
  <button className='w-100 btn-sm btn btn-success' onClick={()=>{addProdToCart(product._id)}}>Add +</button>
</div>
}  )}

</div></>
   </div>

  )
}
