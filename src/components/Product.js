import React from 'react'
import {Link} from 'react-router-dom'
import Rating from '../components/Rating.js'


const Product = ({products}) => {
    return(
        <div>
            <div className='cardContainer '>
            {products.map((product) => {
                return(
                <Link to={`product/${product.id}`}> 
                <div key={product.id} className="cards">
                <div className="card ">
                    <div className="card-image">
                        <figure className="image is-4by5">
                            {/* <Link to={`product/${product.id}`}> */}
                            <img src={product.image} alt="Placeholder image" />
                            {/* </Link> */}
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                            </div>

                            <div className="media-content">
                                {/* <Link to={`/product/${product.id}`}> */}
                                <p className="title is-4">{product.name}</p>
                                {/* </Link> */}
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                <p className="subtitle is-6">${product.price}.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
            )
            })}
        </div>
        </div>
    )
}

export default Product