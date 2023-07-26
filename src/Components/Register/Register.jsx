import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  let [errMsg,setErrMsg]=useState("")
  let [loading,setLoading]=useState(false)
  let navigate =useNavigate()
  let baseUrl ="https://ecommerce.routemisr.com"
  let validate =Yup.object({
    name:Yup.string().required().min(2,"min char must be 2").max(10,"max char must be 10"),
    email:Yup.string().email("Enter Valid Email").required(),
    phone:Yup.string().required().matches(/^(010|011|015|012)[0-9]{8}$/,"Enter Vallid Phone"),
    password:Yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$^&%*()_-]{3,16}$/,"Enter Valid Password"),
    rePassword:Yup.string().required().oneOf([Yup.ref("password")],"Password didn't match")
  
  })
let formik =useFormik({
  initialValues:{
    name:"",
    email:"",
    phone:"",
    password:"",
    rePassword:""
  },
  onSubmit:(values)=>{
    sendRegisterData(values)
  },
validationSchemai:validate
 
})
async function sendRegisterData(objectData){
  setLoading(true)
  let {data}=await axios.post(`${baseUrl}/api/v1/auth/signup`,objectData).catch((error)=>{
    console.log(error.response.data.message);
    setErrMsg(error.response.data.message)
    setLoading(false)
  })
console.log(data);
setLoading(false)
if(data.message === 'success'){
//login
navigate('/login')
}
}
  return (
    <div className='container'>
      <h2>Register Now:</h2>
      <form onSubmit={formik.handleSubmit}> 
        <div className='my-2'>
          <label htmlFor='name'>name</label>
          <input onChange={formik.handleChange} type="text" name='name' id='name' className='form-control' />
       <p className='text-danger'>{formik.errors.name}</p>
       
        </div>
        <div className='my-2'>
          <label htmlFor='email'>email</label>
          <input  onChange={formik.handleChange} type="email" name='email' id='email' className='form-control' />
          <p className='text-danger'>{formik.errors.email}</p>
        </div>
        <div className='my-2'>
          <label htmlFor='password'>password</label>
          <input onChange={formik.handleChange} type="password" name='password' id='password' className='form-control' />
          <p className='text-danger'>{formik.errors.password}</p>
        </div>
        <div className='my-2'>
          <label htmlFor='rePassword'>rePassword</label>
          <input onChange={formik.handleChange} type="password" name='rePassword' id='rePassword' className='form-control' />
          <p className='text-danger'>{formik.errors.rePassword}</p>
        </div>
        <div className='my-2'>
          <label htmlFor='phone'>phone</label>
          <input onChange={formik.handleChange} type="text" name='phone' id='phone' className='form-control' />
          <p className='text-danger'>{formik.errors.phone}</p>
        </div>
  {errMsg !=="" ?<div className='alert alert-danger'>
{errMsg}
        </div>:""}

        {loading?  <button type='button' className='btn btn-success'>
          <i className='fa-solid fa-spinner fa-spin text-white'></i>
        </button>:  <button disabled={!formik.isValid} className='btn btn-success' type='submit'>Register</button>}
       

      </form>
    </div>
  )

}
