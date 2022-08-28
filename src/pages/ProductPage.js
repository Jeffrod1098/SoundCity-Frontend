import React from 'react'

import Rating from '../components/Rating.js'
import {useParams} from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductPage = () => {

  const [product, setProduct] = useState([])
  const {id} = useParams()



  useEffect(() => {
      async function getProduct(){
          const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
          setProduct(response.data)
      } 

      getProduct()
  }, [])
    // const {_id} = useParams() 
    return (
    <div>
        <div className='imgholder'>
        <img className='imgcard' src={product.image} />
        {/* <img className='imgcard' src={item.photo_2_url} /> */}
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{product.name}</p>
              {/* <p class="subtitle is-6">${item.price}.00</p> */}
            </div>
          </div>

          <div class="content">
            {/* {item.details} */}

          </div>
        </div>
        <div class="card">
          <footer class="card-footer">
            <div href="#" class="card-footer-item">ADD TO CART</div>
            <div href="#" class="card-footer-item">
            {/* <Link to={`/comment/${item.id}`}> */}

              COMMENT
            {/* </Link> */}
              
              </div>
          </footer>
        </div>
      </div>
    </div>
    )
}

export default ProductPage