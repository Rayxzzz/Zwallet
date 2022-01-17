import React from 'react'
import { Link } from 'react-router-dom'

const PersonalInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    let phone
    if(user.phone === 1){
        phone = <h6>not registered</h6>
    } else{
        phone = <h6>+{user.phone}</h6>
    }

    return (
        <div className='p-5 w-100'>
            <h4>Personal Information</h4>
            <div className='' style={{ color: '#7A7886' }}>
                <p className='m-0 mt-4'>We got your personal information from the sign</p>
                <p className='p-0 m-0'>up proccess. If you want to make changes on</p>
                <p className='p-0 m-0'>your information, contact our support.</p>
            </div>
            <div className='h-75'>
            <div className="user d-flex  align-items-center h-25 mt-3">
                <div className="name-info pe-1 ms-4">
                    <p className="mb-2">First Name</p>
                    <h6>{user.Name}</h6>
                </div>
                <div className="flex-fill"></div>
            </div>
            <div className="user d-flex  align-items-center h-25 mt-3">
                <div className="name-info pe-1 ms-4">
                    <p className="mb-2">Verified E-mail</p>
                    <h6>{user.Email}</h6>
                </div>
                <div className="flex-fill"></div>
            </div>
            <div className="user d-flex  align-items-center h-25 mt-3">
                <div className="name-info pe-1 ms-4">
                    <p className="mb-2">Phone Number</p>
                    {phone}
                </div>
                <div className="flex-fill"></div>
                <Link to="/profile/phone" className='navLink'>
                <p>menage</p>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default PersonalInfo
