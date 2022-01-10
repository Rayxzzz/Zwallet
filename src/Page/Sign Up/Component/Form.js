import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Form = () => {
    const [form, setForm] = useState({
        email : '',
        password : '',
        user : ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = (e) => {
        axios.post('https://zwallet-ridho.herokuapp.com/auth/register',
        {
            email: form.email, 
            password: form.password,
            name: form.user,
            phone: 628888888,
            pin: 123456
        })
        .then((res) => {
            console.log(res)
            alert(res.data.data)
            navigate('/login')
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <Fragment>
        <div className="h-55 d-flex flex-column mt-5">
            <div className="input-login w-100 h-30 d-flex flex-column justify-content-between">
                <input 
                type="text" 
                placeholder="Enter your username" 
                className="username w-100 "
                name='user'
                onChange={handleChange}
                 />
                <input 
                type="text" 
                placeholder="Enter your e-mail" 
                className="email w-100 mt-5"
                name='email'
                onChange={handleChange}
                 />
                <input 
                type="password" 
                placeholder="Enter your password" 
                className="password w-100 mt-5"
                name='password' 
                onChange={handleChange}
                />
            </div>
            <Link to='/login' className="text-end mt-4 flex-fill">Forgot password?</Link>
            <button className='btn-login mt-5' onClick={handleClick}>Login</button>
            <p className="text-center mt-4">Don’t have an account? Let’s <Link to='/register'>Sign up</Link></p>
        </div>
        </Fragment>
    )
}

export default Form
