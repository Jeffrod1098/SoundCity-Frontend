import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";

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
            dispatch(updateUserProfile({'id': user.id, 'name' : name, 'email' : email, 'password': password}))
        }

    }

    const redirect = '/login'
    // const redirect = location.search ? location.search.split('=')[1] : '/'


    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile


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
    }, [dispatch,redirect, userInfo, user, success])

    return (
        <div>
            <h3>User Profile</h3>
            <div className='form'>
                <h1 className="title is-2"></h1>
                <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
                    <form onSubmit={onSubmitHandler}>

                    <div className="field">
                            <label className="label" >Name</label>
                            <div className="control">
                                <input className="input" name="name" type="name" placeholder="Enter Name" value={name} required onChange={e => setName(e.target.value)} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" >Email</label>
                            <div className="control">
                                <input className="input" name="username" type="email" placeholder="Enter Email" value={email} required onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" >Update Password</label>
                            <div className="control">
                                <input className="input" name="password" type="password" placeholder="Enter New Password" required onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" >Confirm Updated Password</label>
                            <div className="control">
                                <input className="input" name="confirmPassword" type="password" placeholder="Confirm New Password" required onChange={e => setConfirmPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control buttons is-centered">
                                <input className="button is-medium is-info is-fullwidth" type="submit" value="UPDATE" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            {message && <ErrorMessage>{message}</ErrorMessage>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading && <Loader/> }
        </div>
    )
}

export default ProfilePage