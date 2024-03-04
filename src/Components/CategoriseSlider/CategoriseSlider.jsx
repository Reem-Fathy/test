import React, { useEffect, useState } from 'react';
import styles from './CategoriseSlider.module.css';
import axios from 'axios';
import Slider from 'react-slick';

const CategoriseSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1
  };
  const [categories, setCategories] = useState([])
  async function getCtegories() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    // console.log(data);
    setCategories(data.data)
  }

  useEffect(() => {
    getCtegories()
  }, [])
  return (
    <>
      <div className="container my-5">
        <h2>
          shoo papular Categories
        </h2>
        <Slider {...settings} >
          {categories.map(cat => <div className="cat px-1">
            <img src={cat.image} alt="" className='w-100' height={200} />
            <h5>{cat.name}</h5>
          </div>)}
        </Slider>

      </div>
    </>
  );
}
export default CategoriseSlider;