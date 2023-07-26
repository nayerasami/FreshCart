import React, { useContext } from 'react'
import { CategoryContext } from '../../Context/CategoryContext.js'

export default function Category() {
  let {categoryList}=useContext(CategoryContext)


  return (
  <div className="container">
    <div className='row gy-4'>
      <h1>Categories</h1>
    {categoryList.map((el)=>{
      return  <div className='col-md-3 col-sm-4 col-lg-2 '>
      <div> 
        <img src={el.image} className='w-100 imagCat'height={150} alt="" />
        <h6 className='text-success fw-bold mt-2 text-center'>{el.name}</h6>
      </div>
    </div>
    })}
    </div>
  </div>
  )
}
