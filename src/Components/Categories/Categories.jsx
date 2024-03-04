import React, { useEffect, useState } from 'react';
import styles from './Categories.module.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Categories = () =>{


  const [allCategories,setAllCategories]= useState([]);
  const [isLoding,setIsLoding]= useState(true);
  const [error,setError]=useState(null);


async function getCategories() {
  let{data}=await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
  setAllCategories(data.data);
  setIsLoding(false);
}
useEffect(()=>{
  getCategories()
},[])


    return (
        <>
          <Helmet>
              <title>Categories</title>
            </Helmet>
            <h2 className="h1 text-main text-center mt-4">All Categories</h2>

<div className='container py-5'>
  <div className="row g-4 ">
    {allCategories.map((data) => (
      <div className="col-md-4">
        <div className=' cardBrands'>
        <img src={data.image} className='w-100' height={250} alt={data.name} />
        <h5 className='textSuccess text-center'>{data.name}</h5>
        </div>
      </div>
    ))}
  </div>
</div>
        </>
    );
}
export default Categories;