import React from 'react'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import AddPhone from './Component/Profile/AddPhone'
import AddPhone2 from './Component/Profile/AddPhone2'
import './home.css'
import { useSelector } from 'react-redux'

const ChangePhone = () => {
    const { data, loading, error } = useSelector((state) => state.profile)

    let phone
    if(data[0].phone === 1){
        phone = <AddPhone/>
    } else{
        phone = <AddPhone2/>
    }
    return (
        <div className='home d-flex flex-column justify-content-center align-items-center'>
            <Header/>
            <div className="main-content w-75 d-flex justify-content-between align-items-center" >
                <Navbar />
                <div className='dashboard d-flex justify-content-center bg-light border1 ms-3'>
                {phone}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChangePhone
