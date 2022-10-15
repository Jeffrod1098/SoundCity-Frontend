import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { getUserDetails } from "../actions/userActions";

const ProfilePage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(password!= confirmPassword){
            setMessage('Passwords do not match')
        }else{
            console.log('Update profile')
        }

    }

    const redirect = '/login'
    // const redirect = location.search ? location.search.split('=')[1] : '/'


    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if(!userInfo){
            navigate(redirect)
        }else {
            if(!user || !user.name){
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, userInfo, user])

    return (
        <div>
            <h3>User Profile</h3>
        </div>
    )
}

export default ProfilePage