import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import axios from 'axios'

const History = (props) => {
    const [data, setData] = useState({
        data : []
    })
    const user = JSON.parse(localStorage.getItem('user'))

    
    
    useEffect(() => {
        axios.get(`https://zwallet-ridho.herokuapp.com/user/${user.user_id}/transaction/history`)
        .then((res) => {
            // console.log(res.data.data)
            setData({
                data : res.data.data
            })
            // console.log(data)
        })
        .catch((err) => {
            console.log(err.response)
        })       
    })
    
    return (
        <div className="b-2 border1 ms-2 h-100 bg-light">
            <div className="h-100">
                <div className="d-flex justify-content-between h-25 align-items-center px-3">
                    <h6 className="m-0">Transaction History</h6>
                    <Link className='navLink' to='/history'>see all</Link>
                </div>
                <div className="d-flex flex-column h-75 overflow-hidden">
                {data.data.map(item => 
                            <div className="d-flex mt-3 align-items-center ps-2 pe-2">
                                <img src='https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg' alt="" width="50px" height="50px" className="mb-4"/>
                                <div className="name-info pe-1 ms-4">
                                    <h6>{item.receiver} ({item.status})</h6>
                                    <p>{item.date}</p>
                                </div>
                                <div className="flex-fill"></div>
                                <h6 className="pb-2">Rp.{item.amount}</h6>
                            </div>
                        )}
                </div>
            </div>
        </div>
                )
}

export default History
