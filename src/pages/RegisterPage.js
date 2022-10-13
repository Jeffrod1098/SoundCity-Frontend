import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../actions/userActions"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const RegisterPage = () => {

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
        dispatch(register(name, email, password))
    }

    const redirect = '/'
    // const redirect = location.search ? location.search.split('=')[1] : '/'


    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, redirect])

    return (
        <div>
            <div className='form'>
                <h1 className="title is-2"></h1>
                <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
                    <form onSubmit={onSubmitHandler}>
                        <div className="field">
                            <label className="label" >Username</label>
                            <div className="control">
                                <input className="input" name="username" type="email" placeholder="Enter Email" required onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label" >Password</label>
                            <div className="control">
                                <input className="input" name="password" type="password" placeholder="Enter Password" required onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control buttons is-centered">
                                <input className="button is-medium is-info is-fullwidth" type="submit" value="LOGIN" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default RegisterPage