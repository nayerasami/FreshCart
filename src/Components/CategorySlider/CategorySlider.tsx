import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { category } from '../Interface/CategoryInter.ts';
import { CategoryContext } from '../../Context/CategoryContext.js';

export default function CategorySlider() {
let data:any =useContext(CategoryContext)
let  categoryList:category[] =data.categoryList
  return (
    <div>
    
    <OwlCarousel className='owl-theme'  dots={false} autoPlay={true} autoplayTimeout={500} loop items={7}>
{categoryList.map((el)=>{
  return <div >
    <img src={el.image}  className='ImgItem1' alt='' height={150}/>
    
  </div>
})}
    </OwlCarousel>
    <OwlCarousel className='owl-theme'  autoPlay={true} autoplayTimeout={1200} loop items={7}>
{categoryList.map((el)=>{
  return <div >
    <img src={el.image} className='ImgItem2' alt='' height={150}/>
    <h6>{el.name}</h6>
  </div>
})}
    </OwlCarousel>
    </div>
  )
}
