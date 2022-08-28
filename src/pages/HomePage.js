import React from 'react'
import {Link} from 'react-router-dom'
import Product from '../components/Product.js'
import { useState, useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts(){
            const {data} = await axios.get('/api/products/')
            setProducts(data)
        } 

        getProducts()
    }, [])
    return(
        <div>
            <h2>LATEST AND GREATEST</h2>
            <Product products={products}/>
        </div>
        
    )
}

export default HomePage