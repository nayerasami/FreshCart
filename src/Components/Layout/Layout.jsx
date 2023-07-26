import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer.jsx';


export default function Layout({userData,logOut}) {
  return (<>

<Navbar logOut={logOut} userData={userData}/>
<Outlet/>
<Toaster/>
<Footer/>


  </>
  )
}
