import React from 'react'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom';
import './HomeC.scss'
import Product from './smallComps/Product';
import AboutC from './AboutC';
import ShopC from './ShopC';
const HomeC = () => {
    return (
        <div>
            <div className="container">
                <div className="slider">
                <Row>
                    <Col className='slider-left' md={10} sm={24}>
                        <h3>Favorite brands</h3>
                        <h1>An exciting place for the whole family to shop.</h1>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                        <div className="d-block">
                            <Link className='slider-btn d-inline-block'>SHOP NOW</Link>
                            <h4 className='slider-p-1 d-inline-block'>$ 249.99</h4>
                            <p className='slider-p-2 d-inline-block'>$ 249.99</p>
                        </div>
                    </Col>
                    <Col className='slider-right' sm={24} md={14} push={0}>
                        <img className='slider-img' src="/images/slider.png" alt="imagee" />
                    </Col>
                </Row>
                <div className="d-flex justify-content-around slider-footer">
                    <Link><img src="/images/slider-1.png" alt="" /></Link>
                    <Link><img src="/images/slider-2.png" alt="" /></Link>
                    <Link><img src="/images/slider-3.png" alt="" /></Link>
                    <Link><img src="/images/slider-4.png" alt="" /></Link>
                </div>
                </div>
            </div>
            <Product />
            <AboutC />
            <ShopC />
        </div>
    )
}

export default HomeC
