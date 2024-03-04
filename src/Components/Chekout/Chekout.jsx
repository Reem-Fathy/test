import React, { useContext } from 'react';
import styles from './Chekout.module.css';
import { useFormik } from 'formik';
import { cartContext } from '../../Context/cartContext';

export default function Chekout() {


const{payment} = useContext(cartContext)

 async function chekoutPayment(values) {
 const{data}= await  payment(values)
 window.location.href=data.session.url

  }

  let formik = useFormik({
    initialValues: {
      details: '',
      city: '',
      phone: ''
    },
    onSubmit: chekoutPayment
  })

  return (
    <>
      <div className="container p-4 bg-main-light">
        <h2>ChekOut :</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label for="" className='form-label'>Details :</label>
            <input type='text' name='details' id='details' className='form-control' value={formik.values.details} onChange={formik.handleChange} />
          </div>

          <div className="mb-3">
            <label for="" className='form-label'>City :</label>
            <input type='text' name='city' id='city' className='form-control' value={formik.values.city} onChange={formik.handleChange} />
          </div>

          <div className="mb-3">
            <label for="" className='form-label'>Phone :</label>
            <input type='text' name='phone' id='phone' className='form-control' value={formik.values.phone} onChange={formik.handleChange} />
          </div>
          <button className='btn bg-main' type='submit'>Pay</button>
        </form>
      </div>
    </>
  );
}
// export default Chekout;