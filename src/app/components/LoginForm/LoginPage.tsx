import React, { useState } from 'react';

const LoginPage = () => {

    const [{username,password}, setCredentials] = useState({
        username: '',
        password: ''
    })

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await onLogin({
            username,
            password
        })
    }

    return (
        <form>
            <label htmlFor="username">Username</label>
            <input placeholder="Username" value={username} onChange={(event) => setCredentials({
                username:'',
                password:''
            })} />
            <label htmlFor= "password">Password</label>
            <input placeholder= "Password" type="password" value={password} onChange={(event) => setCredentials({
                username,
                password: event.target.value,
            })} />
            <button type="submit">Login</button>
        </form>
    )
}
