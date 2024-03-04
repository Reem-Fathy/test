import React from 'react';
import styles from './MainSlider.module.css';
import Slider from 'react-slick'
import img1 from '../../assets/imges/slider-image-1.jpeg';
import img2 from '../../assets/imges/slider-image-2.jpeg';
import img3 from '../../assets/imges/slider-image-3.jpeg';

const MainSlider = () =>{

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
        <>
             
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
          <Slider {...settings}>
          <img src={img3} alt="" />
          <img src={img2} alt="" />
          <img src={img1} alt="" />

          </Slider>
          </div>
          <div className="col-md-4">
            <img src={img1} alt="" className='w-100' />
            <img src={img2} alt="" className='w-100' />
          </div>
        </div>
      </div>
    
        </>
    );
}
export default MainSlider;