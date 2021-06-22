import React from 'react'
import {Row, Col, Card} from 'antd'
import './smallComps/smallComps.scss'
const Blog = () => {
    return (
        <div className='blog'>
            <div className="container">
                <h3>NEW SHOP</h3>
                <h1>An enormous storehouse of facts</h1>
                <p>The standard chunk of Lorem Ipsum used since the 1500s is </p>
                <p>reproduced below for those interested.</p>
                <Row gutter={32} className='blog-card-area'>
                    <Col md={8} sm={24}>
                        <Row className='mb-4'>
                            <Col span={24} >
                                <Card style={{height:'330px'}} className='blog-card' hoverable><img src="/images/blog1.png" alt="" /></Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Card style={{height:'450px'}} className='blog-card' hoverable><img src="/images/blog2.png" alt="" /></Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8} sm={24}>
                        <Row className='mb-4'>
                            <Col span={24}>
                                    <Card className='blog-card blog-center-cards' hoverable><img src="/images/blog3.png" alt="" /></Card>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col span={24}>
                                    <Card className='blog-card blog-center-cards' hoverable><img src="/images/blog4.png" alt="" /></Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                    <Card className='blog-card blog-center-cards' hoverable><img src="/images/blog5.png" alt="" /></Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8} sm={24}>
                        <Row className='mb-4'>
                            <Col span={24}>
                                <Card style={{height:'450px'}} className='blog-card' hoverable><img src="/images/blog6.png" alt="" /></Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Card style={{height:'330px'}} className='blog-card' hoverable><img src="/images/blog7.png" alt="" /></Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Blog
