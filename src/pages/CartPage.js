import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"
import { useParams } from "react-router-dom"



const CartPage = () => {

    const { id } = useParams()
    const qty = 1

    

    return(
        <div>
            Cart Page 
        </div>
    )
}

export default CartPage