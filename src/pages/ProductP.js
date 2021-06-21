import React from 'react'
import Product from '../comps/smallComps/Product';
import LayOut from '../comps/LayOut';
const ProductP = () => {
    return (
        <div>
            <LayOut>
                <div style={{marginTop:'50px'}}>
                <Product />
                </div>
            </LayOut>
        </div>
    )
}

export default ProductP
