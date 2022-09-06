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
    console.log(cartItems)
    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }

    }, [dispatch, id, qty])

    return (
        <div className="columns">
            <div className="column is-2"></div>
            <div className="card column is-8">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">name</p>
                        </div>
                        <div>
                            <p className="subtitle is-6">@johnsmith</p>
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
            <div className="column is-2"></div>
        </div>
    )
}

export default CartPage