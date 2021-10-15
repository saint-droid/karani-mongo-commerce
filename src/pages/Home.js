import React from 'react'
import Anouncement from '../components/Anouncement'
import Slider from '../components/Slider'

import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import ProductTitle from '../components/ProductTitle'

const Home = () => {
    return (
        <div >
            <Anouncement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <ProductTitle/>
            <Products/>
            <Testimonials/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
