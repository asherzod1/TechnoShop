import React from 'react'
import {Row, Col} from 'antd'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import './smallComps/smallComps.scss'
const ContactC = () => {
    return (
        <div className='contact'>
            <div className="container">
                <div className='contactC'>
                    <Row>
                        <Col md={9} sm={24}>
                            <h3>User Contact</h3>
                            <h1>Contact Us for those interested.</h1>
                            <p>The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.</p>
                        </Col>
                        <Col className='d-flex justify-content-center align-items-center' push={6} md={9} sm={24}>
                            <InputGroup>
                                <Input type='email' placeholder='Enter your email address' />
                                <InputGroupAddon  addonType="prepend"><Button color='primary'>SUBCRIBE</Button></InputGroupAddon>
                            </InputGroup>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default ContactC
