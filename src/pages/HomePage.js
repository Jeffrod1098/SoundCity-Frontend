import React from 'react'
import {Link} from 'react-router-dom'
import Product from '../components/Product.js'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions.js'

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listProducts())

    }, [])

    const products = []
    return(
        <div>
            <h2>LATEST AND GREATEST</h2>
            <Product products={products}/>
        </div>
        
    )
}

export default HomePage