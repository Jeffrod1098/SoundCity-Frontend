import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"
import { useParams } from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa"
import { removeFromCart } from "../actions/cartActions"


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

    const removeFromCartHander = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className="columns ">
            <div className="column is-1">
                <h2>Cart</h2>
            </div>
            <div className=" column is-7">
            {cartItems.length === 0 ? (
                <div>
                    <h2>Your cart is currently empty</h2>
                </div>
            ) : (cartItems.map(item => (
                    <div className="card-content card">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={item.image} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <Link to={`/product/${item.product}`}>
                                    <p className="title is-4">{item.name}</p>
                                </Link>
                            </div>

                            <div>
                                <p className="subtitle is-6">${item.price}</p>
                                <button className="button is-light deleteButton" onClick={() => removeFromCartHander(item.product)}>
                                    <div className="icon is-small">
                                        <FaTrashAlt />
                                    </div>
                                    <div>
                                        remove
                                    </div>
                                </button>
                            </div>

                        </div>


                    </div>
            ))
            )}
            </div>
            

            <div className="column is-3">
                <div className="card">
                    <div className="card-content">
                    <div className="title">SUBTOTAL: </div>
                        <div className="content">
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price,0)} ({cartItems.reduce((acc, item) => acc + item.qty, 0 )})Items
                        </div>
                    </div>
                    <button className="button is-dark checkoutBtn is-large is-fullwidth">
                        <h1>CHECKOUT</h1>
                    </button>
                </div>
            </div>
            <div className="column is-1">
            </div>
        </div>
    )
}

export default CartPage