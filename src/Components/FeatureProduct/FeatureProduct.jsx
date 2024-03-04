
import React, { useContext, useEffect, useState } from 'react';
import styles from './FeatureProduct.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Loder from '../Loder/Loder';
import {useQuery} from 'react-query'
import { cartContext } from '../../Context/cartContext';
import toast from 'react-hot-toast';



export default function FeatureProduct(){

const {addProductToCart,setNumOfCartItem}= useContext(cartContext);

async function addProduct(id){
let {data}=await  addProductToCart(id);
if (data.status === "success"){
  toast.success(data.message,{
    position: 'bottom-right',
  });
  setNumOfCartItem(data.numOfCartItem);
}
}




const [allProducts, setAllProducts] = useState([])

async function getAllProducts() {
  let { data } = await  axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  // console.log(data);
  setAllProducts(data.data);
}

useEffect(() => {
  getAllProducts()
}, [])




return(
       <div className="container">

        <div className="row gy-4">
        
          {allProducts.map((product) => (  <div className='col-md-2 product'>
        
            <Link to={`/details/${product.id}`}  >
              <img src={product.imageCover} className='w-100' alt="" />
              <h6 className='text-main'>{product.category.name}</h6>
              <h2 className='h5 my-3'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
              <div className="d-flex justify-content-between my-3">
                <span>{product.price} EGP</span>
                <span><i className='fa-solid fa-star rating-color'></i> {product.ratingsAverage}</span>
              </div>
      
            </Link>
           
            <button  className='btn bg-main w-100' onClick={()=>{addProduct(product.id)}} > Add To Cart</button>
            </div>))}
            </div>
            </div>
 
)}
