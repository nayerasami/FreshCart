import React, { useEffect, useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.tsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import Products from './Components/Products/Products.tsx'
import Profile from './Components/Profile/Profile.jsx'
import ProtectRouting from './Components/ProtectRouting/ProtectRouting.jsx'
import jwt_decode from "jwt-decode";
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx'
import ResetPassword from './Components/ForgetPassword/ResetPassword.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import Category from './Components/Category/Category.jsx'
import { CategoryContextProvi } from './Context/CategoryContext.js'
import Brands from './Components/Brands/Brands.jsx'
import { BrandsContextProvi } from './Context/BrandsContext.js'
import CartContextProvider from './Context/CartContext.js'
import Cart from './Components/Cart/Cart.jsx'
import Checkout from './Components/Checkout/Checkout.jsx'


export default function App() {
  let [userData,setUserData]=useState(null)
useEffect(()=>{

  if(localStorage.getItem("token")){
  
    let token =localStorage.getItem("token")
console.log(token);
let data =jwt_decode(token)
console.log(data);
saveUserData(data)


  } 
},[])
function logOut(){
  setUserData(null)
  localStorage.removeItem("token")
  return <Navigate to='/login'/>
}
function ProtectedRouting2(props){
if(localStorage.getItem("token") !== null){
return <Navigate to='/home'/>
}else{
  return props.children
}

}
function saveUserData(data){
setUserData(data)
  }
let routes =createBrowserRouter([
{path:"FreshCart/",element:<Layout logOut={logOut} userData={userData}/>,children:[
  {path:"home",element:<ProtectRouting><Home/></ProtectRouting>},
  {path:"products",element:<ProtectRouting><Products/></ProtectRouting>},
  {path:"category",element:<ProtectRouting><Category/></ProtectRouting>},
  {path:"brands",element:<ProtectRouting><Brands/></ProtectRouting>},
  {path:"productdetails/:id",element:<ProtectRouting><ProductDetails/></ProtectRouting>},
  {path:"profile",element:<ProtectRouting><Profile  userData={userData}/></ProtectRouting>},
  {path:"forgetPassword",element:<ForgetPassword/>},
  {path:"checkout/:cartId",element:<Checkout/>},
  {path:"resetPassword",element:<ResetPassword/>},
  {path:"login",element:<Login saveUserData={saveUserData}/>},
  {index:true,element:<ProtectedRouting2><Register/></ProtectedRouting2>},
  {path:"*",element:<Notfound/>},
  {path:"cart",element:<Cart/>}
 
]}
 
])

  return (<CartContextProvider>
     <CategoryContextProvi>
    <BrandsContextProvi>
    <RouterProvider router={routes}/>
   
    </BrandsContextProvi>

  </CategoryContextProvi>
  </CartContextProvider>
  )
}
 