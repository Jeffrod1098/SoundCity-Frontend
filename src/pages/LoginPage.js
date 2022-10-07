import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/userActions"
import { createBrowserHistory } from "history"


const LoginPage = () => {

    const history = createBrowserHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        console.log('submitted')
    }

    const redirect = Location.search ? Location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])


    return (
        <div>
        <div className='form'>
            {/* <h1 className="title is-2"></h1> */}
            <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
                <form onSubmit={submitHandler}>
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
                            <input className="button is-medium is-info is-fullwidth" type="submit" value="LOGIN"/>
                        </div>
                    </div>
                </form>

            </div>
            <Link to={redirect ? `register?redirect=${redirect}` : '/register'}>
            <div className="has-text-centered">Click here to register</div>            
            </Link>

        </div>
        </div>
    )
}

export default LoginPage