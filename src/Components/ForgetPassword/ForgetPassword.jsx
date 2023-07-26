import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
export default function ForgetPassword() {
  let baseUrl ="https://ecommerce.routemisr.com"
  let [codeFlag,setCode]=useState(true)
  let [errorMsg,seterrorMsg]=useState("")
  let navi = useNavigate()
  let validationSchema = Yup.object({
    email:Yup.string().required().email("Enter Vaild Email")
  })
  let Form1=useFormik({
    initialValues:{
      email: ""
    },
    onSubmit:(vals)=>{
      console.log(vals);
      forgetPassApi(vals)
    },
    validationSchema
  })
  let Form2=useFormik({
    initialValues:{
      resetCode: ""
    },
    onSubmit:(vals)=>{
      console.log(vals);
      verifyPassApi(vals)
    }
  })
 async function forgetPassApi(valObj){
    let {data}=await axios.post(`${baseUrl}/api/v1/auth/forgotPasswords`,valObj)
 console.log(data);
 if(data.statusMsg =='success'){
  setCode(false)
 }
  }
  async function verifyPassApi(valObj){
    let {data}=await axios.post(`${baseUrl}/api/v1/auth/verifyResetCode`,valObj).catch((error)=>{
      seterrorMsg(error.response.data.message)})
 console.log(data);
 if(data.status == "Success"){
navi('/resetPassword')

 }
  }
  return (
    <div className='container'>

      {codeFlag? <form onSubmit={Form1.handleSubmit}>
        <div>
          <label htmlFor='email'>email</label>
          <input onChange={Form1.handleChange} type="email" name='email' id='email' className='form-control' />
       <p className='text-danger'>{Form1.errors.email}</p>
       
        </div>
        <button className='btn btn-success'>Send Messege</button>
      </form> : <form onSubmit={Form2.handleSubmit} >
        <div>
          <label htmlFor='resetCode'>Reset Code</label>
          <input onChange={Form2.handleChange} type="text" name='resetCode' id='resetCode' className='form-control' />
  
        </div>
        <br/>
        {errorMsg != "" ? <div className='alert alert-danger'>{errorMsg}</div>:""}
     
        <button className='btn btn-success'>Verify Password</button>
      </form> }
     
     
    </div>
  )
}
