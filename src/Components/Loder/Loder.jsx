import React from 'react';
import styles from './Loder.module.css';
import {Grid} from 'react-loader-spinner'


const Loder = () =>{
   
   return(
    <>
    <div className="container">
    <Grid
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass='justify-content-center'
  />
  </div>
    </>
   )
  }
export default Loder;