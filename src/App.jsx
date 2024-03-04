import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Cart from './Components/Cart/Cart';
import Brands from './Components/Brands/Brands';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
// import TokenContextProvider, { TokenContext } from './Context/Token';
import { useContext, useEffect } from 'react';
import { useCallback } from 'react';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Chekout from './Components/Chekout/Chekout';
import AllOrders from './Components/AllOrders/AllOrders';
import WashList from './Components/WashList/WashList';
import { cartContext } from './Context/cartContext';
import TokenContext from './Context/Token'


function App() {

  // let { setToken } = useContext(TokenContext)

  const routes = createBrowserRouter([
    {
      path: "", element: <LayOut />, children: [
        { path: "home", element: <ProtectedRoutes> <Home /> </ProtectedRoutes> },
        { path: "products", element: <ProtectedRoutes><Products /></ProtectedRoutes> },
        { path: "details/:id", element: <ProtectedRoutes><ProductDetails /></ProtectedRoutes> },
         { path: "categoris", element: <ProtectedRoutes><Categories /></ProtectedRoutes> },
        { path: "cart", element: <ProtectedRoutes><Cart /></ProtectedRoutes> },
        { path: "brands", element: <ProtectedRoutes> <Brands /></ProtectedRoutes> },
        { path: "chekout", element: <ProtectedRoutes> <Chekout /></ProtectedRoutes> },
        { path: "allorders", element: <ProtectedRoutes> <AllOrders /></ProtectedRoutes> },
        { path: "washlist", element: <ProtectedRoutes> <WashList /></ProtectedRoutes> },



        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ]
    }
  ])

  // useEffect(() => {

  //   if (localStorage.getItem("userToken") != null) {
  //     setToken(localStorage.getItem("userToken"))
  //   }
  // }, [])

  return <RouterProvider router={routes}></RouterProvider> 
}

export default App;
















