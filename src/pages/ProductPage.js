import React from 'react'

import Rating from '../components/Rating.js'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions.js'
import { createBrowserHistory } from 'history'
const ProductPage = () => {

  const history = createBrowserHistory()

  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)

  const { id } = useParams()


  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [])

  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`)
  }

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
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <span>Qty</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                  <a className="dropdown-item">
                     <strong>1</strong> 
                  </a>
                  <a className="dropdown-item">
                    <strong>2</strong> 
                  </a>
                  <a className="dropdown-item">
                     <strong>3</strong> 
                  </a>
                  <a className="dropdown-item">
                    <strong>4</strong> 
                  </a>
                  <a className="dropdown-item">
                    <strong>5</strong> 
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        <button onClick={addToCartHandler} className="button is-medium is-fullwidth is-dark">Add To Cart</button>
      </div>
      <div className='column is-2'></div>
    </div>
  )
}

export default ProductPage