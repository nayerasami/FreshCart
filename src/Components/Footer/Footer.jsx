import React from 'react'
import googleDownload from '../../../src/assets/GooglePlayDownload.png'
import iosDownload from '../../../src/assets/appStoreDownload.png'
import amazonIcon from '../../assets/icons/amazon.png'
import visaIcon from '../../assets/icons/Visa.png'
import masteIcon from '../../assets/icons/masterCard.png'



export default function Footer() {
  return (
    <div className=' mt-5 bg-light p-3 '>

<div className="container my-3">
<h5 className='fw-bold my-2'>Get the FreshCart App</h5>
      <p className='text-muted '> we will send you a link ,open it on your phone to download the app </p>
<div className="row justify-content-center align-items-center">
  <div className="col-md-10 my-3">
    
  <input className='form-control my-2 ' type="email" id='mail' name='mail' placeholder='Email ...' />
 
 
  </div>
  <div className="col-md-2 my-3">
  <button className='btn btn-success' type='submit'>Share App Link</button>
  </div>
  <hr />
<div className="row align-items-center">
  <div className="col-md-4 d-flex justify-content-between align-items-center">
  <div className="text-pay">  <p>Payment Parteners</p></div>
<div className="payment-icons w-50 d-flex justify-content-aroung align-items-center">
<div ><img alt='' className='w-50 icon-photo' src={masteIcon}/></div>
<div ><img alt='' className='w-50 icon-photo' src={visaIcon}/></div>
<div ><img alt='' className='w-50 icon-photo' src={amazonIcon}/></div>
</div>
  </div>
 <div className="col-md-2"></div>
 
<div className=" col-md-3 download-des">
<p className=' me-0'> Get Delivers with FreshCart</p>
</div>
  <div className="col-md-3 my-3 download-icons d-flex justify-content-between align-items-center">
<div ><img className='w-100 icon-photo' src={googleDownload} alt="" /></div>
<div className='mx-2'><img className='w-100 icon-photo' src={iosDownload} alt="" /></div>



  </div>
</div>
<hr />
</div>
</div>
   
    </div>
  )
}
