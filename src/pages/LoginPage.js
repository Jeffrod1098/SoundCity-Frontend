import React from "react";
import { useState } from "react";

export const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')




    return (
        <div className="form">
            <h1>LOGIN</h1>
            <div className="container has-text-centered box" style={{ maxWidth: '300px' }}>
                {/* <form onSubmit={submit}> */}
                <form >

                    <div className="field">
                        <label className="label" >Username</label>
                        <div className="control">
                            <input className="input" name="username" type="text" placeholder="username" required onChange={e => setUsername(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" >Password</label>
                        <div className="control">
                            <input className="input" name="password" type="password" placeholder="password" required onChange={e => setPassword(e.target.value)} />
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
    )
}