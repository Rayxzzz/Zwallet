import React from 'react'
import InputPin from '../../../../Component/pin/inputPin'
import { useState } from 'react/cjs/react.development'
import { changePin } from '../../../Helper/home'

const ChangePinChild = () => {
    const [pin, setPin] = useState({
        popup: false,
        pin1 : '',
        pin2: '',
        pin3: '',
        pin4: '',
        pin5: '',
        pin7: ''
    })

    const user = JSON.parse(localStorage.getItem('user'))

    const handleChangePin = (e) => {
        setPin({
            ...pin,
            [e.target.name] :  e.target.value
        })
    }
    
    const handleClick = () => {
        let pinC = pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin7
        changePin(user.user_id, {
            pin : pinC
        })
        .then((res) => {
            alert("pin change :)")
            user.pin = pinC
            console.log(user.pin)
            localStorage.setItem('user', JSON.stringify(user))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='p-5 w-100'>
            <h4>Change PIN</h4>
            <div className='' style={{ color: '#7A7886' }}>
                <p className='m-0 mt-4'>Enter your current 6 digits Zwallet PIN below to</p>
                <p className='p-0 m-0'>continue to the next steps.</p>
            </div>
            <div className='w-100 h-50 d-flex justify-content-center align-items-center'>
                <div className='w-75'>
                    <InputPin click={handleChangePin}/>
                </div>
            </div>
            <div className='w-100 h-25 d-flex justify-content-center align-items-center'>
                <div className='w-75 h-50 d-flex justify-content-center align-items-center'>
                    <button className="btn-login h-100 w-75" onClick={handleClick}>continue</button>
                </div>
            </div>
        </div>
    )
}

export default ChangePinChild
