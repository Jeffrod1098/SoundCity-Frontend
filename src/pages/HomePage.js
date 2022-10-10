import React from 'react'
import {Link} from 'react-router-dom'
import Product from '../components/Product.js'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'

const HomePage = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList
    useEffect(() => {
        dispatch(listProducts())

    }, [dispatch])

    return(
        <div>
            {loading? <Loader/> : error ? <Message>{error}</Message>: <Product products={products}/>}
        </div>
        
    )
}

export default HomePage