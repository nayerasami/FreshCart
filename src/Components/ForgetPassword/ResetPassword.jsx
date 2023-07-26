
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function ResetPassword() {
  let navigate = useNavigate()
  let baseUrl ="https://ecommerce.routemisr.com"
  let validate =Yup.object({
  
    email:Yup.string().email("Enter Valid Email").required(),
  
    newPassword:Yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$^&%*()_-]{3,16}$/,"Enter Valid Password"),
  
  })
let formik =useFormik({
  initialValues:{
  
    email:"",
    newPassword:"",
   
  },
  onSubmit:(values)=>{
resetPasswordApi(values)
  },
validationSchemai:validate
 
})
async function resetPasswordApi(objData){
  let {data}= await axios.put(`${baseUrl}/api/v1/auth/resetPassword`,objData)
  console.log(data);
  if(data.token){
    navigate('/login')
  }
}
  return (<>
   <div className='container'>
            <form onSubmit={formik.handleSubmit}> 
      
      <div className='my-2'>
        <label htmlFor='email'>email</label>
        <input  onChange={formik.handleChange} type="email" name='email' id='email' className='form-control' />
        <p className='text-danger'>{formik.errors.email}</p>
      </div>
      <div className='my-2'>
        <label htmlFor='newPassword'>new Password</label>
        <input onChange={formik.handleChange} type="password" name='newPassword' id='newPassword' className='form-control' />
        <p className='text-danger'>{formik.errors.newPassword}</p>
      </div>
<button className='btn btn-success '>Update Password</button>
    </form>

    </div></>
   
  )
}
