import React from 'react'
import Navbarr from './Navbar'
import Footerr from './Footerr'
const LayOut = (props) => {
    return (
        <div>
           <Navbarr />
           {props.children} 
           <Footerr />
        </div>
    )
}

export default LayOut
