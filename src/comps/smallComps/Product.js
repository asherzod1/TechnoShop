import React from 'react'
import {Row, Col, Rate} from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'
import './smallComps.scss'
const Product = () => {
    return (
        <div className='productC'>
            <div className="container productC1">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col md={12} sm={24}>
                        <Row>
                            <Col className='product-img' md={12} sm={24}>
                            <Link className='product-icon'><ShoppingCartOutlined /></Link>
                            </Col>
                            <Col className='product-card' md={12} sm={24}>
                                <h3 className='product-title'>Always in style!</h3>
                                <p className='product-info'>The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
                                <p className='product-price' style={{fontWeight: 'bold'}}>$ 249.99 </p>
                                <p className='product-price' style={{opacity: '0.5', textDecorationLine: 'line-through'}}>/$ 249.99</p><br />
                                <Rate />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} sm={24}>
                        <Row>
                            <Col className='product-img2' md={12} sm={24}>
                                <Link className='product-icon'><ShoppingCartOutlined /></Link>
                            </Col>
                            <Col className='product-card' md={12} sm={24}>
                                <h3 className='product-title'>Always in style!</h3>
                                <p className='product-info'>The standard chunk of Lorem Ipsum below for those interested. The standard chunk of for those interested.</p>
                                <p className='product-price' style={{fontWeight: 'bold'}}>$ 249.99 </p>
                                <p className='product-price' style={{opacity: '0.5', textDecorationLine: 'line-through'}}>/$ 249.99</p><br />
                                <Rate />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} sm={24}>
                    </Col>
                </Row>
            </div>
            <div className='container'>
                <Row gutter={24}>
                    <Col className=' gutter-row' md={12} sm={24}>
                        <Row className='productC2 d-flex align-items-center'>
                            <Col md={12} sm={12} className='productC2-text'>
                                <p>Get up to 20% off Today Only!</p>
                                <h1>THE 4K HDR COMPACT DRONE</h1>
                                <Link className='productC2-link'>SHOP NOW</Link>
                            </Col>
                            <Col md={12} sm={12} className='productC2-img'>
                                <img src="/images/product3.png" alt="imagee" />
                            </Col>
                        </Row>
                    </Col>
                    <Col className=' gutter-row' md={12} sm={24}>
                        <Row className='productC2 d-flex align-items-center'>
                            <Col md={12} sm={12} className='productC2-text'>
                                <p>Get up to 20% off Today Only!</p>
                                <h1>THE 4K HDR COMPACT CAMERA</h1>
                                <Link className='productC2-link'>SHOP NOW</Link>
                            </Col>
                            <Col md={12} sm={12} className='productC2-img'>
                                <img src="/images/product4.png" alt="imagee" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
        
    )
}

export default Product
