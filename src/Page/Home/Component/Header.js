import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetNotification } from '../../../redux/actions/NotificationList'
import { axiosInstance } from '../../Helper/axios'
import socket from '../../Helper/socket'
import test from '../../../assets/images/photo2.png'
import Moment from 'react-moment'
import bell from './bell.png'
import '../../style/header.css'

const Header = (props) => {
    const dispatch = useDispatch()
    const notify = useSelector((state) => state.notificationList)
    const { data, loading, error } = useSelector((state) => state.profile)
    const [newNotif, setNewNotif] = useState([])
    const [notifCount, setNotifCount] = useState(false)
    const [notif, setNotif] = useState(false)
    const token = localStorage.getItem('token')
    const handleClick = () => {
        setNotif(true)
    }

    useEffect(()=>{
        dispatch(GetNotification(token))
        socket.on('sendMoney', (data) => {
            newNotif.unshift(data)
            setNotifCount(true)
        })
    },[])
    
    const closeNotif = () => {
        setNotif(false)
        setNotifCount(false)
        // newNotif.length = 0
        // dispatch(GetNotification(token))
    }

    let NOTIF
    if (newNotif == 0) {
        NOTIF = null
    } else {
        NOTIF = <p style={{ color: '#7A7886' }} className='mt-3 ms-3'>you have {newNotif.length} notification</p>
    }


    // let phone
    // if (data[0].phone === 1) {
    //     phone = <p style={{ color: '#7A7886' }} className='mt-0 pb-1'>not registered</p>
    // } else {
    //     phone = <p style={{ color: '#7A7886' }} className='mt-0 pb-1'>+62{data[0].phone}</p>
    // }
    
    return (
        <div className="header d-flex justify-content-center bg-secondary w-100 bg-light">
            <div className="head-content h-100 d-flex justify-content-between">
                <section className="d-none w-25 h-100 d-md-flex align-items-center">
                    <h2 style={{ color: '#6379F4' }}>Zwallet</h2>
                </section>
                <section className="w-25 h-100 d-none d-md-flex align-items-center justify-content-between">
                    <img src={test} className='profile border-img' width='52px' alt="" />
                    <div onClick={closeNotif} className="d-none d-md-flex h-100 flex-column justify-content-center align-items-center">
                        <h5 className="mt-4" style={{ color: "#3A3D42" }}>{data[0].Name}</h5>
                        +{data[0].phone}
                    </div>
                    <div className='p-4 pt-4 pb-3 d-sm-none text-width'>
                    <p style={{ color: '#7A7886' }} className='m-0 mb-2'>Hello,</p>
                    <h5 className="" style={{ color: "#3A3D42" }}>{data[0].Name}</h5>
                    </div>
                    {notifCount? <div className='dot'><p className='text-center text-light'></p></div> : null}
                    <img className='pointer bell' src={bell} alt="" onClick={handleClick}/>
                </section>
                <section className="w-100 h-100 d-md-none d-flex align-items-center justify-content-between">
                    <img src={test} className='profile border-img me-1' width='52px' alt="" />
                    <div onClick={closeNotif} className="d-none d-md-none h-100 flex-column justify-content-center align-items-center">
                        <h5 className="mt-4" style={{ color: "#3A3D42" }}>{data[0].Name}</h5>
                        +{data[0].phone}
                    </div>
                    <div className='d-md-none wp-30 w-md-25 pt-2 ps-4 text-width'>
                    <p style={{ color: '#7A7886' }} className='m-0 mb-2'>Hello,</p>
                    <h5 className="" style={{ color: "#3A3D42" }}>{data[0].Name}</h5>
                    </div>
                    {notifCount? <div className='dot'><p className='text-center text-light'></p></div> : null}
                    <img className='pointer' src={bell} alt="" onClick={handleClick}/>
                </section>
                {/* {notif ? 
                <div className='notif-modal bg-light'>
                    {NOTIF}
                    {newNotif ? newNotif.map(user => 
                    <div className='newnotif positon-relative ps-2 m-4 d-flex align-items-center'>
                        <div className='dotNew'></div>
                        <img src={user.photo} alt="" width="14%" className='imgnotif' />
                        <p className='ms-3 mt-3 w-50'>user <b>{user.sender}</b> sends you <b>Rp.{user.amount}</b></p>
                        <p className='ms-5 mt-3 text-muted w-25'><i><Moment fromNow>{user.date}</Moment></i></p>
                    </div>
                    )
                    :
                    null
                    }
                    {notify.data.map(user => 
                    <div className='m-4 ps-2 d-flex align-items-center'>
                        <img src={user.photo_sender} alt="" width="14%" className='imgnotif' />
                        <p className='ms-3 mt-3 w-50'>user <b>{user.id_sender}</b> sends you <b>Rp.{user.amount}</b></p>
                        <p className='ms-5 mt-3 text-muted w-25'><i><Moment fromNow>{user.date}</Moment></i></p>
                    </div>
                    )}
                </div>
                :
                null
            } */}
            </div>
        </div>
    )
}

export default Header
