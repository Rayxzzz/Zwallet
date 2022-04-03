import React from 'react'
import Header from '../Component/Header'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import AmountTransfer from '../Component/Transfer/AmountTransfer'
import { makeInvoice } from '../../Helper/home'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { profileId } from '../../Helper/home'

const TransferAmount = () => {
    const [value, setValue] = useState()
    const [message, setMessage] = useState()
    const [receiver, setReceiver] = useState({
        name: '',
        phone: '',
        photo: '',

    })
    const params = useParams()
    const navigate = useNavigate()

    let token = localStorage.getItem('token')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleChange2 = (e) => {
        setMessage(e.target.value)
    }

    useEffect(() => {
        profileId(params.id, token)
            .then(res => {
                console.log(res.data.data[0])
                setReceiver({
                    name: res.data.data[0].Name,
                    phone: res.data.data[0].phone,
                    photo: res.data.data[0].photo
                })
            })
            .catch(err => {
                console.log(err)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = (e) => {
        makeInvoice({
            receiver: Number(params.id),
            amount: value,
            message: message,
            photo_receiver: receiver.photo,
            receiver_name: receiver.name
        }, token)
            .then((res) => {
                let param = res.data.message.replace(/\D/g, "")
                navigate(`/transfer/${params.id}/${param}`)

            })
            .catch((err) => {
                console.log(err.response)
                alert(err.response.data.message)
            })
    }
    // console.log(receiver.photo)
    console.log(message )
    return (
        <div className='home d-flex flex-column justify-content-center align-items-center'>
            <Header />
            <div className="main-content w-75 d-flex justify-content-between align-items-center" >
                <Navbar transfer='on'/>
                <div className='dashboard d-flex justify-content-center bg-light border1 ms-3'>
                    <AmountTransfer name={receiver.name} phone={receiver.phone} image={receiver.photo} click={handleClick} amount={handleChange} message={message} message2={handleChange2} value={value} id={params.id} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TransferAmount
