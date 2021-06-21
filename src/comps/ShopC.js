import React from 'react'
import { Tabs, Card, Row, Col, Rate } from 'antd';
import { Link } from 'react-router-dom'
import {ArrowRightOutlined} from '@ant-design/icons'
import './smallComps/smallComps.scss'
const ShopC = () => {
    const { TabPane } = Tabs;

    function callback(key) {
    console.log(key);
    }
    return (
        <div className='ShopC'>
            <div className="container">
                <div className="header">
                    <h3 className=''>New Products</h3>
                    <h1>Popular Products</h1>

                    <div className="shop-tabs">
                        <Tabs className='tabs-header' centered={true} tabBarStyle={{color: '#686E73', opacity: '1'}} defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="RECENT ARRIVAL" key="1">
                            <Row gutter={32} className='card-row'>
                            <Col md={8} sm={24} className='col-card'> 
                                    <Card hoverable className='shop-card'>
                                        <div className='card-header'>
                                            <p>Get up to 20% off Today Only!</p>
                                            <div className="card-img">
                                                <img src="/images/shop6.png" alt="imagee" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h1>Black iPhone Speaker</h1>
                                            <p>$ 249.99</p>
                                            <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                        </div>
                                        <Rate></Rate>
                                    </Card>
                                </Col>
                                <Col md={8} sm={24} className='col-card'>
                                    <Card hoverable className='shop-card'>
                                        <div className='card-header'>
                                            <p>Get up to 20% off Today Only!</p>
                                            <div className="card-img">
                                                <img src="/images/shop1.png" alt="imagee" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h1>Black iPhone Speaker</h1>
                                            <p>$ 249.99</p>
                                            <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                        </div>
                                        <Rate></Rate>
                                    </Card>
                                </Col>
                                <Col md={8} sm={24} className='col-card'>
                                    <Card hoverable className='shop-card'>
                                        <div className='card-header'>
                                            <p>Get up to 20% off Today Only!</p>
                                            <div className="card-img">
                                                <img src="/images/shop2.png" alt="imagee" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h1>Black iPhone Speaker</h1>
                                            <p>$ 249.99</p>
                                            <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                        </div>
                                        <Rate></Rate>
                                    </Card>
                                </Col>
                                <Col md={8} sm={24} className='col-card'>
                                    <Card hoverable className='shop-card'>
                                        <div className='card-header'>
                                            <p>Get up to 20% off Today Only!</p>
                                            <div className="card-img">
                                                <img src="/images/shop3.png" alt="imagee" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h1>Black iPhone Speaker</h1>
                                            <p>$ 249.99</p>
                                            <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                        </div>
                                        <Rate></Rate>
                                    </Card>
                                </Col>
                                <Col md={8} sm={24} className='col-card'>
                                    <Card hoverable className='shop-card'>
                                        <div className='card-header'>
                                            <p>Get up to 20% off Today Only!</p>
                                            <div className="card-img">
                                                <img src="/images/shop4.png" alt="imagee" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h1>Black iPhone Speaker</h1>
                                            <p>$ 249.99</p>
                                            <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                        </div>
                                        <Rate></Rate>
                                    </Card>
                                </Col>
                                <Col md={8} sm={24} className='col-card'>
                                    <Card hoverable className='shop-card'>
                                        <div className='card-header'>
                                            <p>Get up to 20% off Today Only!</p>
                                            <div className="card-img">
                                                <img src="/images/shop5.png" alt="imagee" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h1>Black iPhone Speaker</h1>
                                            <p>$ 249.99</p>
                                            <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                        </div>
                                        <Rate></Rate>
                                    </Card>
                                </Col>
                                
                            </Row>

                            </TabPane>
                            <TabPane tab="BEST SELLERS" key="2">
                                <Row gutter={32} className='card-row'>
                                    <Col md={8} sm={24} className='col-card'>
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop1.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                    <Col md={8} sm={24} className='col-card'> 
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop6.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                    <Col md={8} sm={24} className='col-card'>
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop2.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="SPECIAL OFFERS" key="3">
                                <Row gutter={32} className='card-row'>
                                    <Col md={8} sm={24} className='col-card'>
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop2.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                    <Col md={8} sm={24} className='col-card'>
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop3.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                    <Col md={8} sm={24} className='col-card'>
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop4.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="FEATURED IN" key="4">
                                <Row gutter={32} className='card-row'>
                                    <Col md={8} sm={24} className='col-card'>
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop3.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                    <Col md={8} sm={24} className='col-card'>
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop4.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                    <Col md={8} sm={24} className='col-card'>
                                        <Card hoverable className='shop-card'>
                                            <div className='card-header'>
                                                <p>Get up to 20% off Today Only!</p>
                                                <div className="card-img">
                                                    <img src="/images/shop5.png" alt="imagee" />
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h1>Black iPhone Speaker</h1>
                                                <p>$ 249.99</p>
                                                <p style={{textDecorationLine: 'line-through', opacity: '0.5'}}>/$ 249.99</p>
                                            </div>
                                            <Rate></Rate>
                                        </Card>
                                    </Col>
                                </Row>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div style={{textAlign: 'center', marginTop:'20px'}}>
                        <Link to='/shop' className='shop-view'>ViEW ALL <ArrowRightOutlined /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopC
