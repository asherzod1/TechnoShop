import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { Link } from 'react-router-dom';
import {SearchOutlined, ShoppingCartOutlined, UserOutlined} from '@ant-design/icons'
import './NavbarFooter.scss'
const Navbarr = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className="container">
             <Navbar light expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className='justify-content-between'>
                <Nav className="mr-auto" navbar>
                    <NavbarBrand href="/"><img src="/images/logo.png" alt="" /></NavbarBrand>
                </Nav>
                <Nav className="mr-auto" navbar>
                    <div className="menues d-flex justify-content-between" >
                        <UncontrolledDropdown className='menues-item' nav inNavbar>
                        <DropdownToggle nav caret>
                            <Link className='navLink' to='/'>HOME</Link>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown >
                        <UncontrolledDropdown className='menues-item' nav inNavbar>
                        <DropdownToggle nav caret>
                            <Link className='navLink' to='/about'>ABOUT</Link>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className='menues-item' nav inNavbar>
                        <DropdownToggle nav caret>
                            <Link className='navLink' to='/product'>PRODUCT</Link>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className='menues-item' nav inNavbar>
                        <DropdownToggle nav caret>
                            <Link className='navLink' to='/blog'>BLOG</Link>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className='menues-item' nav inNavbar>
                        <DropdownToggle nav caret>
                            <Link className='navLink' to='/shop'>SHOP</Link>
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/contact/">CONTACT US</NavLink>
                        </NavItem>
                    </div>
                </Nav>
                <Nav className="mr-auto" navbar>
                    <div className="nav-icons d-flex">
                        <NavLink href='/serach/'><SearchOutlined /></NavLink>
                        
                        <NavLink href='/cart/'><ShoppingCartOutlined /><span className='badge-cart'>0</span></NavLink>
                        
                        <div className='nav-user'><NavLink  href='/user/'><UserOutlined /></NavLink></div>
                    </div>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        </div>
    )
}

export default Navbarr
