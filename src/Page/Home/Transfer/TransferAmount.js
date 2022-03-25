import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import AmountTransfer from '../Component/Transfer/AmountTransfer'
import { makeInvoice } from '../../Helper/home'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const TransferAmount = () => {
    const [value, setValue] = useState()
    const params = useParams()
    const navigate = useNavigate()

    let token = localStorage.getItem('token')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = (e) => {
        makeInvoice({
            receiver: Number(params.id),
            amount: value
        }, token)
            .then((res) => {
                alert('success')
                let param = res.data.message.replace(/\D/g, "")
                navigate(`/transfer/${params.id}/${param}`)

            })
            .catch((err) => {
                console.log(err.response)
                alert(err.response.data.message)
            })
    }
    return (
        <div className='home d-flex flex-column justify-content-center align-items-center'>
            <Header />
            <div className="main-content w-75 d-flex justify-content-between align-items-center" >
                <Navbar />
                <div className='dashboard d-flex justify-content-center bg-light border1 ms-3'>
                    <AmountTransfer click={handleClick} amount={handleChange} value={value} id={params.id} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TransferAmount
