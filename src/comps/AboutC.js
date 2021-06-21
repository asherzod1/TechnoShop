import React from 'react'
import { Row, Col } from 'antd'
import {CheckCircleOutlined} from '@ant-design/icons'
import './smallComps/smallComps.scss'
const AboutC = () => {
    return (
        <div className='aboutC'>
            <div className="container">
                <Row>
                    <Col className='about-left' sm={24} md={14}>
                        <img className='about-l-img1' src="/images/About.png" alt="" />
                        <img src="/images/aboutVector.png" alt="" />
                    </Col>
                    <Col className='about-right' sm={24} md={10}>
                        <h2>
                            about Products
                        </h2>
                        <h1>About For Products</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly have suffered believable.</p> 
                        <br />
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <div className="checkarea">
                            <p><CheckCircleOutlined className='check-icon'/>There are many variations of passages of Lorem Ipsum</p>
                            <p><CheckCircleOutlined className='check-icon'/>There are many variations of passages of Lorem  Embarrassing middle of text.</p>
                            <p><CheckCircleOutlined className='check-icon'/>There are many variations of passages of Lorem Ipsum</p>
                            <p><CheckCircleOutlined className='check-icon'/>There are many variations of passages.</p>
                            <p><CheckCircleOutlined className='check-icon'/>There are many variations of passages.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutC
