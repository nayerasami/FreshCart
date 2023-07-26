import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider1 from '../../assets/images/slider-image-1.jpeg'
import Slider2 from '../../assets/images/slider-image-2.jpeg'
import Slider3 from '../../assets/images/slider-image-3.jpeg'
export default function MainSlider() {
  return (
  <>
  <div className='row g-0 mt-3'>
  <div className="col-md-9">
  <OwlCarousel className='owl-theme' loop items={1}>
  <img src={Slider2} className='w-100' height={400} alt="" />
  <img src={Slider3} className='w-100' height={400} alt="" />
  <img src={Slider1} className='w-100' height={400} alt="" />
    </OwlCarousel>
    </div>
  <div className='col-md-3'>
  <img src={Slider2} className='w-100' height={200} alt="" />
  <img src={Slider3} className='w-100' height={200} alt="" />
     </div>
  
  </div>
  </>
  )
}
