import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"
import { useParams } from "react-router-dom"



const CartPage = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const qty = 1
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }

    }, [dispatch, id, qty])
    console.log(cartItems)

    return (
        <div className="columns">
            <div className="column is-1">
                <h2>Cart</h2>
            </div>
            {cartItems.length === 0 ? (
                <div>
                    <h2>Your cart is currently empty</h2>
                </div>
            ): (cartItems.map(item => (
                <div className="card column is-7">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img src={item.image} />
                            </figure>
                        </div>
                        <Link to={`/product/${item.product}`}>
                        <div className="media-content">
                            <p className="title is-4">{item.name}</p>
                        </div>
                        </Link>
                        <div>
                            <p className="subtitle is-6">${item.price}</p>
                        </div>
 
                    </div>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                    </div>
                </div>
            </div>
            ))

            

            )}

            <div className="column is-4"></div>
        </div>
    )
}

export default CartPage