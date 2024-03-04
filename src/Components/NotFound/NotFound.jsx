import React from 'react';
import styles from './NotFound.module.css';

import notFoundImg from '../../assets/imges/error.svg'


const NotFound = () =>{
    return (
        <section className='container d-flex justify-content-center'>
          <img src={notFoundImg} alt="" className='w-75 mx-auto'/>
        </section>
    );
}
export default NotFound;



