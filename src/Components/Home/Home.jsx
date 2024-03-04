import React from 'react';
import styles from './Home.module.css';
// import Cart from '../Cart/Cart';
import Categories from '../Categories/Categories';
import MainSlider from '../MainSlider/MainSlider';
import CategoriseSlider from '../CategoriseSlider/CategoriseSlider';
import { Helmet } from 'react-helmet'
import Loder from '../Loder/Loder';
import FeatureProduct from '../FeatureProduct/FeatureProduct';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            {/* <Loder /> */}
            <MainSlider />
            <CategoriseSlider />
            <FeatureProduct />
        </>
    );
}
export default Home;