import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CartContext } from '../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductDetails() {
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

let {id}=useParams()
   console.log(id);

   let baseUrl ="https://ecommerce.routemisr.com"
   let [productDetail,setproductDetail]= useState({})
 useEffect(()=>{
    getProductDetails()
 },[])
  async function getProductDetails(){
 let {data}=await axios.get(`${baseUrl}/api/v1/products/${id}`)
 console.log(data.data);
 setproductDetail(data.data)
 $(".loading").fadeOut(1000)
   }
  return (
    <div className='container py-5'>
       <div className='position-fixed top-0 start-0 end-0 bottom-0 bg-info loading '>
<i className='fa-solid fa-spinner fa-spin fa-2xl'></i>
</div>
      {productDetail?  <div className='row align-items-center'>
            <div className="col-md-4">
                 
            {productDetail.images?     <OwlCarousel className='owl-theme' loop items={1}>
                  {productDetail.images.map((el)=>{
                    return <div>
                      <img src={el} alt="" className='w-100' />
                    </div>
                  })}
                 </OwlCarousel>:""}


            </div>
            <div className="col-md-8">
                <h2>{productDetail.title}</h2>
                <p className='text-muted'>{productDetail.description}</p>
        
           
                <div className='d-flex justify-content-between'>
  <p>{productDetail.price}EGP</p>
  <div className=''>
    <i className='fa-solid fa-star text-warning'></i>{productDetail.ratingsAverage}
  </div>
  </div>
          <button onClick={()=>addProdToCart(productDetail._id)} className='btn btn-success w-100'> + Add to Cart</button>
          
            </div>
        </div>:""}

    </div>
  )
}
