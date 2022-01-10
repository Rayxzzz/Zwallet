import React from 'react'
import './login.css'
import Leftside from './Component/LeftSide'
import RightSide from './Component/RightSide'

function Login() {
    return (
        <div className='main row bg-secondary'>
        <Leftside/>
        <RightSide/>
        </div>
    )
}

export default Login
