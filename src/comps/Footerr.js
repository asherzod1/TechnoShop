import React from 'react'
import { Row, Col } from 'antd'
import {Link} from 'react-router-dom'
import {FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube, FiGlobe} from 'react-icons/fi'
const Footerr = () => {
    return (
        <div className='footerr'>
            <div className="container">
                <Row gutter={32}>
                    <Col md={6} sm={24}>
                        <Link><img src="/images/footer.png" alt="" /></Link>
                        <p style={{marginTop: '22px'}} className='f-text'>STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.</p>
                    </Col>
                    <Col md={4} sm={24}>
                        <h2>INFORMATION</h2>
                        <Link className='f-text'>New Collection</Link>
                        <Link className='f-text'>About Store</Link>
                        <Link className='f-text'>Contact Us</Link>
                        <Link className='f-text'>Latest News</Link>
                        <Link className='f-text'>Our Sitemap</Link>
                        <Link className='f-text'>Orders History</Link>
                    </Col>
                    <Col md={4} sm={24}>
                        <h2>FOOTER MENU</h2>
                        <Link className='f-text'>Instagram profile</Link>
                        <Link className='f-text'>New Collection</Link>
                        <Link className='f-text'>Contact Us</Link>
                        <Link className='f-text'>Latest News</Link>
                        <Link className='f-text'>Terms & Conditions</Link>
                        <Link className='f-text'>Purchase Theme</Link>
                    </Col>
                    <Col md={4} sm={24}>
                        <h2>USEFUL LINKS</h2>
                        <Link className='f-text'>Instagram profile</Link>
                        <Link className='f-text'>New Collection</Link>
                        <Link className='f-text'>Contact Us</Link>
                        <Link className='f-text'>Latest News</Link>
                        <Link className='f-text'>Terms & Conditions</Link>
                        <Link className='f-text'>Purchase Theme</Link>
                    </Col>
                    <Col md={6} sm={24}>
                        <h2>ABOUT THE STORE</h2>
                        <p className='f-text'>STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.</p>
                        <h3 style={{opacity: '1'}} className='f-text'>www.company.com</h3>
                        <div>
                            <Link className='f-icon'>
                                <FiFacebook />
                            </Link>
                            <Link className='f-icon'>
                                <FiInstagram />
                            </Link>
                            <Link className='f-icon'>
                                <FiTwitter />
                            </Link>
                            <Link className='f-icon'>
                                <FiLinkedin />
                            </Link>
                            <Link className='f-icon'>
                                <FiYoutube />
                            </Link>
                        </div>
                         <p className='fff'><FiGlobe/><span style={{marginLeft: '10px'}}>English</span></p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footerr
