import React, { useState } from 'react'
import FormRegister from './FormRegister'
import FormPin from '../../Create Pin/Component/FormPin'
import { useNavigate } from 'react-router-dom'
import { register } from '../../../Helper/auth'


const RightSide = () => {
    const [form, setForm] = useState({
        popup: true,
        email: '',
        password: '',
        user: ''
    })
    const navigate = useNavigate()

    const [pin, setPin] = useState({
        popup: false,
        pin1: '',
        pin2: '',
        pin3: '',
        pin4: '',
        pin5: '',
        pin7: ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        setForm({
            ...form,
            popup: false
        })
        setPin({
            ...pin,
            popup: true
        })
    }
    const handleChangePin = (e) => {
        setPin({
            ...pin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log()
        let pinConfirm = Number(pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin7)
        console.log(e)
        register({
            email: form.email,
            password: form.password,
            name: form.user,
            phone: 1,
            pin: pinConfirm
        })
            .then((res) => {
                navigate('/login')
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    return (
        <div className='col-md-5 desktop-main col-sm-12 main-mobile'>
            <h1 className='text-center zwallet-mobile d-sm-block d-md-none'>Zwallet</h1>
            <div className='form-desktop form w-100 fade-up-mobile d-flex justify-content-center align-items-center'>
                <div className='w-75 h-75 d-flex flex-column mb-5'>
                    <div className="info-right d-flex justify-content-between flex-column ">
                        <h1 className='text-center d-sm-block d-md-none mb-4'>Sign Up</h1>
                        <p className='text-center text-form d-sm-block d-md-none'>Create your account to access Zwallet.</p>
                        <h3 className="lh-sm d-md-flex d-none fw-normal fs-4">
                            Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users
                        </h3>
                        <p className="lh-lg d-md-flex d-none fs-7 mt-3 mb-5">
                            Transfering money is eassier than ever, you can access{"\n"}
                            Zwallet wherever you are. Desktop, laptop, mobile phone?{"\n"}
                            we cover all of that for you!
                        </p>
                    </div>
                    {pin.popup && <FormPin one={pin.pin1} two={pin.pin2} three={pin.pin3} four={pin.pin4} five={pin.pin5} six={pin.pin7} change={handleChangePin} submit={handleSubmit} />}
                    {form.popup && <FormRegister email={form.email} password={form.password} user={form.user} click={handleClick} change={handleChange} />}
                </div>
            </div>
        </div>
    )
}

export default RightSide 
