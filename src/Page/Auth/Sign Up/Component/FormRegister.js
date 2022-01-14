import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import {Link, useNavigate} from 'react-router-dom'
import { register } from '../../../Helper/auth'
import axios from 'axios'


const FormRegister = (props) => {
   
    return (
        <Fragment>
        <div className="h-55 d-flex flex-column mt-5">
            <div className="input-login w-100 h-30 d-flex flex-column justify-content-between">
                <input 
                type="text" 
                placeholder="Enter your username" 
                className="username w-100 "
                name='user'
                onChange={props.change}
                 />
                <input 
                type="text" 
                placeholder="Enter your e-mail" 
                className="email w-100 mt-5"
                name='email'
                onChange={props.change}
                 />
                <input 
                type="password" 
                placeholder="Enter your password" 
                className="password w-100 mt-5"
                name='password' 
                onChange={props.change}
                />
            </div>
            <button className='btn-login mt-5' onClick={props.click}>Sign Up</button>
            <p className="text-center mt-4">Already have an account? Let’s <Link to='/register'>Login</Link></p>
        </div>
        </Fragment>
    )
}

export default FormRegister
