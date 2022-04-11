import React from 'react'
import './register.css'
import Leftside from '../LeftSide'
import RightSide from './Component/RightSide'
import '../../style/login.css'

function Login() {
    return (
        
        <div className='main row bg-secondary m-0'>
        <Leftside/>
        <RightSide/>
        </div>
    )
}

export default Login
