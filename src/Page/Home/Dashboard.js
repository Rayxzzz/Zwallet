import React from 'react'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Saldo from './Component/Dashboard/Saldo'
import Graphic from './Component/Dashboard/Graphic'
import History from './Component/Dashboard/History'
import './home.css'
import '../style/dashboard.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetBalance } from '../../redux/actions/Balance'
import { GetProfile } from '../../redux/actions/Profile'



const Dashboard = () => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.profile)
    const balance = useSelector((state)=>state.balance)
    const token = localStorage.getItem('token')

    
    useEffect(() => {
        dispatch(GetProfile(token))

        // dispatch(GetBalance(token))
    }, [])
    
    // useEffect(() => {
    //     // console.log(data[0])
    //     // socket.emit('userOnline', (data[0]))
    //     // socket.on('sendMoney', (data))
    //     dispatch(GetBalance(token))
    //     console.log('tess');
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [socket])

    return (
        <div className='home d-flex flex-column justify-content-center align-items-center'>
            <Header />
            <div className="fade-up main-content d-flex justify-content-between align-items-center" >
                <Navbar dashboard='on' />
                <div className='dashboard ms-md-3'>
                    <Saldo balance={balance.data[0].balance} phone={data?.[0]?.phone} />
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
