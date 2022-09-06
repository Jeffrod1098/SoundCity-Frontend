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
    const {cartItems}= cart
    console.log(cartItems)
    useEffect(() => {
        if(id){
            dispatch(addToCart(id, qty))
        }

    },[dispatch, id, qty])

    return(
        <div>
            <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">name</p>
      </div>
      <div>
      <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>

        </div>
    )
}

export default CartPage