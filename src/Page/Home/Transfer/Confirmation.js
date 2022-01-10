import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Detail from '../Component/Transfer/Detail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Confirmation = () => {
    const [detail, setDetail] = useState({
        amount : '',
        balance: '',
        date : ''
    })
    const params = useParams()
    const navigate = useNavigate()
    const balance = localStorage.getItem('balance')
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(()=>{
        axios.get(`https://zwallet-ridho.herokuapp.com/user/857/transaction/${params.invoice}`)
        .then((res)=>{
            setDetail({
                amount : res.data.data[0].amount,
                balance : Number(balance) - Number(res.data.data[0].amount),
                date : new Date(res.data.data[0].date).toString()
            })
        })
        .catch((err)=> {
            console.log(err)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    // console.log(user.pin)
    const handleClick = () => {
        
        axios.put(`https://zwallet-ridho.herokuapp.com/user/${user.user_id}/transaction/${params.invoice}`, {
            pin : user.pin
        })
        .then((res) => {
            alert('success transfer')
            localStorage.setItem('balance', detail.balance)
            navigate('/')
        })
        .catch((err) => {
            alert('this already transfered')
        })
    }

    return (
        <div className='home d-flex flex-column justify-content-center align-items-center'>
            <Header />
            <div className="main-content w-75 d-flex justify-content-between align-items-center" >
                <Navbar />
                <div className='dashboard overflow-scroll d-flex justify-content-center bg-light border1 ms-3'>
                <Detail id={params.id} click={handleClick} amount={detail.amount} left={detail.balance} date={detail.date}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Confirmation
