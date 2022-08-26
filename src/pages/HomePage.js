import React from 'react'
import products from '../products.js'
import {Link} from 'react-router-dom'
import Product from '../components/Product.js'

const HomePage = () => {
    return(
        <div>
            <h2>LATEST AND GREATEST</h2>
            <Product products={products}/>
        </div>
        
    )
}

export default HomePage