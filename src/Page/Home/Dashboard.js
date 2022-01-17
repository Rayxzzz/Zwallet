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

const Dashboard = () => {
    const [saldo , setSaldo] = useState({
        value : ''
    })
    const user = JSON.parse(localStorage.getItem('user'))
    
    useEffect(()=> {
        balance(user.user_id)
        .then((res) => {
            localStorage.setItem('balance', res.data.data[0].balance)
            setSaldo({
                value : res.data.data[0].balance
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    // const balance = localStorage.getItem('balance')



    return (
        <div className='home d-flex flex-column justify-content-center align-items-center'>
            <Header/>
            <div className="main-content w-75 d-flex justify-content-between align-items-center" >
                <Navbar />
                <div className='dashboard ps-3'>
                    <Saldo balance={saldo.value} phone={user.phone}/>
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
