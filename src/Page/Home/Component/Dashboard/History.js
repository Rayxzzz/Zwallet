import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import { transactionHistory } from '../../../Helper/home'

const History = (props) => {
    const [data, setData] = useState({
        data: []
    })
    const user = JSON.parse(localStorage.getItem('user'))



    useEffect(() => {
        transactionHistory()
            .then((res) => {
                setData({
                    data: res.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
                            <img src='https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg' alt="" width="50px" height="50px" className="mb-4" />
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
