import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Checkout() {
  let baseUrl ="https://ecommerce.routemisr.com"

  let {cartId} =useParams()
  let formik =useFormik({
    initialValues:{
     
        details: "",
        phone: "",
        city: ""
    },onSubmit:(vals)=>{
console.log(vals)
checkOut(vals,cartId)
    }
  })

  async function checkOut(vals,id){


    let body ={shippingAddress:vals}

let headers = {
  token :localStorage.getItem("token")
}
    let {data}= await axios.post(`${baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:3003/#/`,body ,{headers})
  console.log(data)
  if(data.status == "success"){
    window.open(data.session.url,"_self")
  }
   
  }



  return (
    <div className='container'> 

      <h1>Check Out</h1>

<form action="" onSubmit={formik.handleSubmit}>

<div className='my-2'>
      <label htmlFor="details">details</label>
      <input onChange={formik.handleChange} type="text" name='details' id='details' className='form-control'/>
    </div>
    <div className='my-2'>
      <label htmlFor="phone">phone</label>
      <input  onChange={formik.handleChange} type="text" name='phone' id='phone' className='form-control'/>
    </div>
    <div className='my-2'>
      <label htmlFor="city">city</label>
      <input  onChange={formik.handleChange} type="text" name='city' id='city' className='form-control'/>
    </div>

    <button type='submit' className='btn btn-success'>Pay</button>
</form>
 
    </div>
  )
}
