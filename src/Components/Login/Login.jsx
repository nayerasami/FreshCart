import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Login({saveUserData}) {
  let [errMsg,setErrMsg]=useState("")
  let [loading,setLoading]=useState(false)
  let navigate = useNavigate()
  let baseUrl ="https://ecommerce.routemisr.com"
  let validate =Yup.object({
  
    email:Yup.string().email("Enter Valid Email").required(),
  
    password:Yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$^&%*()_-]{3,16}$/,"Enter Valid Password"),
  
  })
let formik =useFormik({
  initialValues:{
  
    email:"",
    password:"",
   
  },
  onSubmit:(values)=>{
    dataLogin(values)
  },
validationSchemai:validate
 
})
async function dataLogin(objectData){
  setLoading(true)
  let {data}=await axios.post(`${baseUrl}/api/v1/auth/signin`,objectData).catch((error)=>{
    console.log(error.response.data.message);
    setErrMsg(error.response.data.message)
    setLoading(false)
  })
console.log(data);
setLoading(false)
if(data.message === 'success'){
//login
localStorage.setItem("token",data.token)
saveUserData(data.user)
navigate('/home')
}
}
  return (
    <div className='container'>
      <h2>Login Now:</h2>
      <form onSubmit={formik.handleSubmit}> 
      
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

   {errMsg !=="" ?<div className='alert alert-danger'>
{errMsg}
        </div>:""} 
<Link className='py-2' to='/forgetPassword?'>Forget Password ?</Link>
<br/>
        {loading?  <button type='button' className='btn btn-success'>
          <i className='fa-solid fa-spinner fa-spin text-white'></i>
        </button>:  <button disabled={!formik.isValid} className='btn btn-success' type='submit'>Login</button>}
       

      </form>
    </div>
  )

}
 