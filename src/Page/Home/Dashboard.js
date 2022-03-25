import React from 'react'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Saldo from './Component/Dashboard/Saldo'
import Graphic from './Component/Dashboard/Graphic'
import History from './Component/Dashboard/History'
import './home.css'
import { useEffect, useState } from 'react/cjs/react.development'
import { balance } from '../Helper/auth'
import { useDispatch, useSelector } from 'react-redux'
import { GetProfile } from '../../redux/actions/Profile'
import { GetBalance } from '../../redux/actions/Balance'
import socket from '../Helper/socket'



const Dashboard = () => {
    const dispatch = useDispatch()
    const { data, loading, error } = useSelector((state) => state.profile)
    const balance = useSelector((state)=>state.balance)
    
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')
    
    
    
    useEffect(() => {
        console.log(data[0])
        socket.emit('userOnline', (data[0]))
        socket.on('sendMoney', (data))
        dispatch(GetBalance(token))

    }, [socket])

    return (
        <div className='home d-flex flex-column justify-content-center align-items-center'>
            <Header />
            <div className="main-content w-75 d-flex justify-content-between align-items-center" >
                <Navbar />
                <div className='dashboard ps-3'>
                    <Saldo balance={balance.data[0].balance} phone={data[0].phone} />
                    <div className='b mt-2 d-flex'>
                        <Graphic />
                        <History />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
