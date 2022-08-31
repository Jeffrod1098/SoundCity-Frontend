import React from 'react'

import Rating from '../components/Rating.js'
import {useParams} from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions.js' 

const ProductPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails
  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [])


    return (
    <div className='columns productPage'>
      <div className='column is-2'></div>
      <div className='column content'>
        <h1>{product.name}</h1>
        <img src={product.image}/>

      </div>
      {/* <div className='column is-narrow'></div> */}
      <div className='column is-3 content '>
        <h3>Price:   ${product.price}</h3>
        <h3>How many in stock: {product.countInStock}</h3>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
        <div className='box'><h3>Description: {product.description}</h3></div>
        <button className="button is-medium is-fullwidth is-dark">Add To Cart</button>
      </div>
      <div className='column is-2'></div>
    </div>
    )
}

export default ProductPage