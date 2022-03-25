import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetNotification } from '../../../redux/actions/NotificationList'
import { axiosInstance } from '../../Helper/axios'
import socket from '../../Helper/socket'
import Moment from 'react-moment'
import bell from './bell.png'


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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    
    console.log(newNotif)
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


    let phone
    if (data[0].phone === 1) {
        phone = <p style={{ color: '#7A7886' }} className='mt-0'>not registered</p>
    } else {
        phone = <p style={{ color: '#7A7886' }} className='mt-0'>+62{data[0].phone}</p>
    }
    
    return (
        <div className="header d-flex justify-content-center bg-secondary w-100 bg-light">
            <div className="head-content w-75 h-100 d-flex justify-content-between">
                <section className="w-25 h-100 d-flex align-items-center">
                    <h2 style={{ color: '#6379F4' }}>Zwallet</h2>
                </section>
                <section className="w-25 h-100  d-flex align-items-center justify-content-between">
                    <img src={data[0].photo} className='border1' width='52px' alt="" />
                    <div onClick={closeNotif} className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mt-3" style={{ color: "#3A3D42" }}>{data[0].Name}</h5>
                        {phone}
                    </div>
                    {notifCount? <div className='dot'><p className='text-center text-light'></p></div> : null}
                    <img className='pointer' src={bell} alt="" onClick={handleClick}/>
                </section>
                {notif ? 
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
            }
            </div>
        </div>
    )
}

export default Header
