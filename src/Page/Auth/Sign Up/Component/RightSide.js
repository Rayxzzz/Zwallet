import React, { useState } from 'react'
import FormRegister from './FormRegister'
import FormPin from '../../Create Pin/Component/FormPin'
import {useNavigate} from 'react-router-dom'
import { register } from '../../../Helper/auth'


const RightSide = () => {
    const [form, setForm] = useState({
        popup: true,
        email : '',
        password : '',
        user : ''
    })
    const navigate = useNavigate()
    
    const [pin, setPin] = useState({
        popup: false,
        pin1 : '',
        pin2: '',
        pin3: '',
        pin4: '',
        pin5: '',
        pin7: ''
    })
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleClick = (e) => {
        setForm({
            ...form,
            popup : false
        })
        setPin({
            ...pin,
            popup : true
        })
    }
    const handleChangePin = (e) => {
        setPin({
            ...pin,
            [e.target.name] :  e.target.value
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
            console.log(res)
            alert(res.data.data)
            navigate('/login')
        })
        .catch((err) => {
            console.log(err.response)
        })
    }


    return (
        <div className='col-5 bg-light'>
            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <div className='w-75 h-75 d-flex flex-column mb-5'>
                <div className="info-right d-flex justify-content-between flex-column ">
                    <h3 className="lh-sm fw-normal fs-4">
                        Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users
                    </h3>
                    <p className="lh-lg fs-7 mt-3 mb-5">
                        Transfering money is eassier than ever, you can access{"\n"}
                        Zwallet wherever you are. Desktop, laptop, mobile phone?{"\n"}
                        we cover all of that for you!
                    </p>
                </div>
                {pin.popup &&  <FormPin change={handleChangePin} submit={handleSubmit}/>}
                {form.popup &&  <FormRegister click={handleClick} change={handleChange}/>} 
                </div>
            </div>
        </div>
    )
}

export default RightSide 
