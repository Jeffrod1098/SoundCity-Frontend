import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartActions"
import { useParams } from "react-router-dom"



const CartPage = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const qty = 1

    useEffect(() => {
        if(id){
            dispatch(addToCart(id, qty))
        }

    },[dispatch, id, qty])

    return(
        <div>
            Cart Page 
        </div>
    )
}

export default CartPage