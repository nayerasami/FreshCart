import React, { useContext, useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import Logo from '../../assets//freshcart-logo.svg'
import { CartContext } from '../../Context/CartContext'
export default function Navbar({userData,logOut}) {

let {getLoggedCart,cartList}=useContext(CartContext)


useEffect(()=>{
  getLoggedCart()
},[])


  return (
<>
<nav className='navbar navbar-expand-lg bg-light '>
  <div className='container'>
    <NavLink className='navbar-brand' to='/'>
      <img src={Logo} className='w-100' alt="" />
    </NavLink>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
   {userData?  <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true? 'active nav-link':'nav-link'} to="home" >Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?'active nav-link':'nav-link'} to='products'>Products</NavLink>
        </li>
    
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?'active nav-link':'nav-link'} to='category'>Categories</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink className={ ({isActive})=> isActive === true? 'active nav-link':'nav-link'} to="brands" >Brands</NavLink>
        </li>
     
     </ul>:""}
   
   
    
     <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
   
      {userData ?     <>

   
        <li className='nav-item'>

        <NavLink className={ ({isActive})=> isActive === true? 'active nav-link':'nav-link'} to="cart" >   
             <div type="button" class="position-relative">
       Cart <i class="fa-solid fa-cart-shopping " ></i>
 {cartList?  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
{cartList.numOfCartItems}
  
  </span>:""}
</div>
</NavLink>










        </li>
        <li className='nav-item py-2'>
        <i className='fa-brands fa-facebook mx-2'></i>
        <i className='fa-brands fa-youtube mx-2'></i>
        <i className='fa-brands fa-twitter mx-2'></i>
        <i className='fa-brands fa-spotify mx-2'></i>
      </li>
        <li className='nav-item'>
        <span className='nav-link' onClick={logOut}>LogOut</span>
        </li>
    </>:  <>
       <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?'active nav-link':'nav-link'} to="/" >Register</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className={ ({isActive})=> isActive === true?'active nav-link':'nav-link'} to="login">Login</NavLink>
        </li>
       </>}


      
      
     </ul>
    </div>
  </div>
</nav>

</>
  )
  
}
