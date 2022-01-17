import React from 'react'
import { useState } from 'react/cjs/react.development'
import { changePhone } from '../../../Helper/home'

const AddPhone = () => {
    const [phone, setPhone] = useState({
        number: ''
    })
    let user = JSON.parse(localStorage.getItem('user'))

    const handleChange = (e) => {
        console.log(e.target.value)
        setPhone({
            number : Number(e.target.value)
        })
    }

    const handleClick = () => {
        changePhone(user.user_id, {
            phone : phone.number
        })
        .then((res) => {
            user.phone = phone.number
            localStorage.setItem('user', JSON.stringify(user))
            alert('success add phone')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className='p-5 w-100'>
            <h4>Add Phone Number</h4>
            <div className='' style={{ color: '#7A7886' }}>
                <p className='m-0 mt-4'>Add at least one phone number for the transfer</p>
                <p className='p-0 m-0'>ID so you can start transfering your money to </p>
                <p className='p-0 m-0'>another user.</p>
            </div>
            <div className='mt-5 w-100 h-50 d-flex flex-column justify-content-center align-items-center'>
              <div className='w-75'>
                  <p className='position-absolute ms-5'>+62</p>
                <input
                    type="text"
                    placeholder="Enter your e-mail"
                    className="phone w-100 "
                    name='email'
                    onChange={handleChange}
                />
              </div>
              <div className='w-100 h-50 d-flex justify-content-center align-items-center'>
                <div className='w-75 h-50 d-flex justify-content-center align-items-center'>
                    <button className="btn-login h-100 w-75" onClick={handleClick}>continue</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddPhone
