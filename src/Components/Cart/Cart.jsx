import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
export default function Cart() {

    let {addToCart,cartList,getLoggedCart,updateCart,deleteCartItem,clearAllCartItems}= useContext(CartContext)
   
 
    
    useEffect(()=>{
    
        getLoggedCart()
    
      
    },[])
  return <>
  
   <div className='container position-relative'>
      {cartList ?  <div className=" bg-light py-4 my-4" id='main-box'>
    <div className=" d-flex justify-content-between align-items-center">
    <div className="banner-right">
        <h5 className='text-success ms-5 fw-bolder'>Shop Cart</h5>
    <p className='text-muted ms-5'>(Cart items :{cartList.numOfCartItems})</p>
        </div>
<div className="banner-left me-4">
    <button  onClick={()=>clearAllCartItems(cartList.data._id)} className='btn btn-outline-success'><i className='fa-solid fa-trash'></i> clear all</button>
</div>
    </div>
         </div>:""}
   




   {cartList ?   <div className='bg-light proucts-box py-4 my-5 p-5' id='prod'>
    {cartList.data.products.filter((product)=>product.count >0).map((product,index)=>{
return <div className="row my-4" key={index}>
 <div key={product.product._id} className="row">
    <div className="col-md-2">
    <img src={product.product.imageCover} className='w-100' alt="" />
    
    </div>
    <div className="col-md-10 d-flex justify-content-between align-items-center">
  <div className="detailss">
  <h6 className='text-success fw-bolder'>{product.product.title}</h6>
  <h6 className='text-muted'>{product.price}</h6>
  <button onClick={()=>deleteCartItem(product.product._id)} className='btn btn-danger mt-5'><i className='fa-solid fa-trash text-light me-2'></i>remove</button>

  </div>

  <div className='counter'>
    <button onClick={()=>updateCart(product.product._id,product.count+1)} className='btn btn-success'>+</button>
    <span className='mx-2'>{product.count}</span>
    <button onClick={()=>updateCart(product.product._id,product.count-1)} className='btn btn-danger'>-</button>
    <div/>
 
   
    </div>
   
    
 </div>
</div>
</div>
      })}
      
    </div>:""}
    <hr />
{cartList ? <div className='position-absolute end-0'>
          
          {cartList !== null? <h6 className='text-success'><span className='fw-bolder'>Total Price:</span> {cartList.data.totalCartPrice} EGP</h6>:""}
          
          
          <Link to={"/checkout/"+cartList.data._id} className='btn btn-success w-100 my-4'>Check Out</Link>
          </div> :""}
   
       
      </div>
  
  </>
     
          
    }
    

