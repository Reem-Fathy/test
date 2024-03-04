import React, { useState } from 'react';
import styles from './Register.module.css';
import {useFormik} from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () =>{
let navegate= useNavigate();
const [errorMassage,setErrorMassage]= useState("")
const [isLoding,setIsLoding]= useState(false)

async function callRegister(reqBody){
console.log(reqBody);
setErrorMassage("")
setIsLoding(true)
let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,reqBody).catch(err =>{setIsLoding(false)
 setErrorMassage(err.response.data.message)});
console.log(data);
if(data.message == "success"){
 navegate('/login')
}
}

  const validationSchema= Yup.object({
    name:Yup.string().min(3,"Name Is Too Short").max(10,"Name Is Too Long").required("Name Is Required"),
    email:Yup.string().email("Email Not Valied").required("Email Is Required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/,"Invalied Password").required("Password Is Required"),
    rePassword:Yup.string().oneOf([Yup.ref('password')], "password and rePassword should match").required("Password Is Required"),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Invalied Phone").required("Phone Is Required"),
  });
  const registerForm =  useFormik({
      initialValues:{
        name:"",
        email:"",
        password:"",
        rePassword:"",
        phone:""
      },
      validationSchema : validationSchema,
      onSubmit: callRegister
    })

    return (
      <>
        <Helmet>
              <title>Register</title>
            </Helmet>
        <div className='container my-5'>
         <h2 className='mb-3'>Register Now :</h2> 
         {errorMassage ?  <div className='alert alert-danger'>{errorMassage}</div> : null}
        
         <form onSubmit={registerForm.handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="fullName" className='mb-1'>Full Name</label>
            <input type="text" id='fullName' value={registerForm.values.name} name='name' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} />
          {registerForm.errors.name && registerForm.touched.name ? <div className='alert alert-danger'>{registerForm.errors.name}</div> :null}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email" className='mb-1'>Email</label>
            <input type="email" id='email' value={registerForm.values.email} name='email' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} />
            {registerForm.errors.email && registerForm.touched.email? <div className='alert alert-danger'>{registerForm.errors.email}</div> :null}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password" className='mb-1'>Password</label>
            <input type="password" id='password' value={registerForm.values.password} name='password' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} />
            {registerForm.errors.password && registerForm.touched.password ? <div className='alert alert-danger'>{registerForm.errors.password}</div> :null}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="rePassword" className='mb-1'>RePassword</label>
            <input type="password" id='rePassword' value={registerForm.values.repassword} name='rePassword' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} />
            {registerForm.errors.rePassword && registerForm.touched.rePassword ? <div className='alert alert-danger'>{registerForm.errors.rePassword}</div> :null}
          </div>
          <div className="form-group mb-2">
            <label htmlFor="phone" className='mb-1'>Phone</label>
            <input type="tel" id='phone' value={registerForm.values.phone} name='phone' className='form-control' onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} />
            {registerForm.errors.phone && registerForm.touched.phone ? <div className='alert alert-danger'>{registerForm.errors.phone}</div> :null}
          </div>
          <button className='btn bg-main text-white d-block ms-auto' disabled={!(registerForm.dirty)}>
            {isLoding ? <i className="fa fa-spinner fa-spin"></i> : 'Register'}
          
            </button>
         </form>
        </div>
        </>
    );
}
export default Register;