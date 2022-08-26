import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating.js'
import {useParams} from 'react-router'
import products from '../products.js'

const ProductPage = ({match}) => {

    // const {_id} = useParams() 
    const product = products.find((p) => p._id ==  match.params.id)
    return (
    <div>
        <div className='imgholder'>
        {/* <img className='imgcard' src={item.photo_1_url} /> */}
        {/* <img className='imgcard' src={item.photo_2_url} /> */}
      </div>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              {/* <p class="title is-4">{item.name}</p> */}
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