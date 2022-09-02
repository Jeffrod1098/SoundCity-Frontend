import React from 'react'

import Rating from '../components/Rating.js'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions.js'

const ProductPage = () => {

  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)

  const { id } = useParams()


  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [])


  return (
    <div className='columns productPage'>
      <div className='column is-2'></div>
      <div className='column content'>
        <h1>{product.name}</h1>
        <img src={product.image} />

      </div>
      {/* <div className='column is-narrow'></div> */}
      <div className='column is-3 content '>
        <h3>Price:   ${product.price}</h3>
        <h3>How many in stock: {product.countInStock}</h3>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
        <div className='box'><h3>Description: {product.description}</h3></div>
        <div>
          {product.countInStock > 0 && (
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span>Qty</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                     <strong>1</strong> 
                  </a>
                  <a class="dropdown-item">
                    <strong>2</strong> 
                  </a>
                  <a class="dropdown-item">
                     <strong>3</strong> 
                  </a>
                  <a class="dropdown-item">
                    <strong>4</strong> 
                  </a>
                  <a class="dropdown-item">
                    <strong>5</strong> 
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="button is-medium is-fullwidth is-dark">Add To Cart</button>
      </div>
      <div className='column is-2'></div>
    </div>
  )
}

export default ProductPage