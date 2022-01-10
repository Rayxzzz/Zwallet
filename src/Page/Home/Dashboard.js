import React from 'react'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Saldo from './Component/Dashboard/Saldo'
import Graphic from './Component/Dashboard/Graphic'
import History from './Component/Dashboard/History'
import './home.css'

const Dashboard = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const balance = localStorage.getItem('balance')
    console.log(user.Name)

    

    return (
        <div className='home d-flex flex-column justify-content-center align-items-center'>
            <Header/>
            <div className="main-content w-75 d-flex justify-content-between align-items-center" >
                <Navbar />
                <div className='dashboard ps-3'>
                    <Saldo balance={balance} phone={user.phone}/>
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
