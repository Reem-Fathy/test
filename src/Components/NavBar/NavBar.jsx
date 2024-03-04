import React from 'react';
import styles from './NavBar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/imges/freshcart-logo.svg';
import { useContext } from 'react';
import { countrContext } from '../../Context/Counter';
import TokenContext from '../../Context/Token'
import { cartContext } from '../../Context/cartContext';

const NavBar = () => {

  let { counter } = useContext(countrContext);
  let { token, setToken } = useContext(TokenContext);
  let navigate = useNavigate()


  function logOut() {
    localStorage.removeItem("userToken")
    setToken(null);
    navigate('/login')
  }



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to={'home'}>
            <img src={logo} alt="" className='w-100' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {token ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'home'} >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" aria-current="page" to={'cart'} >Cart <i className='fa-solid fa-shopping-cart'></i>
             <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {/* {numOfCartItem} */}
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'products'} >Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'brands'} >Brands</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'categoris'} >Categories</Link>
              </li>

            </ul> : null}



            <ul className='navbar-nav ms-auto'>
              <li className="nav-item align-self-center">
                <i className='fa-brands fa-instagram mx-1'></i>
                <i className='fa-brands fa-facebook mx-1'></i>
                <i className='fa-brands fa-linkedin mx-1'></i>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'register'} >Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'login'} >Login</Link>
              </li>
              {token ? <li className="nav-item">
                <button className="nav-link" onClick={logOut} >Logout</button>
              </li> : <>
                {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={'register'} >Register</Link>
              </li> */}
              </>}

            </ul>


          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;