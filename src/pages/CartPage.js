import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"
import { useParams } from "react-router-dom"



const CartPage = ({Location}) => {

    const { id } = useParams()
    // const qty = 1 ? Location.search.split('=') : 1
    const qty = 1
    console.log('qty:', qty)

    return(
        <div>
            Cart Page 
        </div>
    )
}

export default CartPage