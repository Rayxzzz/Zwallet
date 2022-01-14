import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import InputPin from '../../../Component/pin/inputPin'
import { Link, useNavigate } from 'react-router-dom'
import { balance } from '../../Helper/auth'
import axios from 'axios'


const Form = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [errorMsg, seterrorMsg] = useState('')

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        balance(form.email)
            .then((res) => {
                localStorage.setItem('balance', res.data.data[0].balance)
            })
            .then((err) => {
                console.log(err)
            })

        axios.post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`,
            {
                id: form.email,
                password: form.password
            })
            .then((res) => {
                const result = res.data.data[0]
                console.log(result)
                localStorage.setItem('auth', 1)
                localStorage.setItem('user', JSON.stringify(result))
                alert(res.data.message)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                seterrorMsg(err.response.data.message)
            })
    }

    return (
        <Fragment>
            <form className="h-55 d-flex flex-column mt-5" onSubmit={handleSubmit}>
                <div className="input-login w-100 h-30 d-flex justify-content-between" >
                   <InputPin/>
                    {errorMsg && <p className='text-danger pt-2'>{errorMsg}</p>}
                </div>
                <button className='btn-login mt-5'>Confirm</button>
            </form>
        </Fragment>
    )
}

export default Form
