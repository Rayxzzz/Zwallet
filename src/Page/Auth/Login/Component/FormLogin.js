import React, { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../Helper/auth'
import { useDispatch } from 'react-redux'
import { GetProfile } from '../../../../redux/actions/Profile'
import { Button, Modal } from 'antd';
import { GetBalance } from '../../../../redux/actions/Balance'
import { ExclamationCircleOutlined } from '@ant-design/icons';


const FormLogin = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        id: ''
    })
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Login with dummy data?');
    const navigate = useNavigate()
    const [errorMsg, seterrorMsg] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        login({
            email: form.email,
            password: form.password
        })
            .then((res) => {
                const result = res.data.data[0]
                const token1 = res.data.data[0].token
                localStorage.setItem('token', result.token)
                dispatch(GetProfile(token1))
                .then((res) => {
                    navigate('/')
                })
            })
            .catch((err) => {   
                localStorage.setItem('token', 1)
                
                dispatch(GetProfile(1))
                .then(()=> {setLoading(false); setOpen(true)})
                // .then(()=>navigate('/'))
                .catch(()=>console.log("2"))
                // seterrorMsg('Internal Server Error')
            })


    }

    return (
        <Fragment>
                  <Modal
        title="Server Error"
        open={open}
        onOk={()=>navigate('/')}
        confirmLoading={confirmLoading}
        onCancel={()=> setOpen(false)}
      >
        <p>{modalText}</p>
      </Modal>
            <form className="fade-up-mobile h-55 d-flex flex-column mt-5 " onSubmit={handleSubmit}>
               
                <div className="input-login w-100 h-30 d-flex flex-column justify-content-between align-items-center" >
                    <input
                        type="text"
                        placeholder="Enter your e-mail"
                        className="email w-100"
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
                    {errorMsg && <p className='text-danger pt-2'>{errorMsg}</p>}
                </div>
                <Link to='/login' className="text-end mt-4 flex-fill">Forgot password?</Link>
                {form.email && form.password ?
                    <button className={`btn-loginOn mt-5`}>{loading ? 'Loading...' : 'Login'}</button>
                    :
                    <button className={`btn-login mt-5`} disabled>Login</button>
                }
                <p className="text-center mt-4">Don’t have an account? Let’s <Link to='/register'>Sign up</Link></p>
            </form>
        </Fragment>
    )
}

export default FormLogin
