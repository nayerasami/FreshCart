import React, { useContext } from 'react'
import { BrandsContext } from '../../Context/BrandsContext'

export default function Brands() {
  let {brandsList}= useContext(BrandsContext)
  return (
    <div className='container'>
      <div className="row">
      <h1>Brands</h1>
      {brandsList.map((el)=>{
      return  <div className='col-md-3 col-sm-4 col-lg-2'>
      <div> 
        <img src={el.image} className='w-100' height={150} alt="" />
        <h6 className='text-success fw-bold text-center'>{el.name}</h6>
      </div>
    </div>
    })}
      </div>
    </div>
  )
}
