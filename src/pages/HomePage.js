import React from 'react'
import {Link} from 'react-router-dom'
import Product from '../components/Product.js'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions.js'

const HomePage = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList
    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    return(
        <div>

            <h2>LATEST AND GREATEST</h2>
            {loading? <h2>LOADING...</h2> : error ? <h2>{error}</h2>: <Product products={products}/>}

        </div>
        
    )
}

export default HomePage