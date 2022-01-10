import React from 'react'
import '../../home.css'
import Receiver from './Receiver'

const Detail = (props) => {
    
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="a-content h-75 w-75">
                <div className="d-flex justify-content-between h-10 align-items-center">
                    <h5 className="m-0">Transfer To</h5>
                </div>
                <div className="mt-4 ms-2 h-10 d-flex flex-column justify-content-between">
                    <Receiver id={props.id}/>
                </div>
                <div className="d-flex justify-content-between h-10 align-items-center">
                    <h5 className="m-0">Detail</h5>
                </div>
                <div className="d-flex flex-column h-75 mt-4 justify-content-between">
                    <div className="user d-flex  align-items-center h-25 mt-3">
                        <div className="name-info pe-1 ms-4">
                            <p className="mb-2">Amount</p>
                            <h6>Rp{props.amount}</h6>
                        </div>
                        <div className="flex-fill"></div>
                    </div>
                    <div className="user d-flex  align-items-center h-25 mt-3">
                        <div className="name-info pe-1 ms-4">
                            <p className="mb-2">Balance Left</p>
                            <h6>Rp{props.left}</h6>
                        </div>
                        <div className="flex-fill"></div>
                    </div>
                    <div className="user d-flex  align-items-center h-25 mt-3">
                        <div className="name-info pe-1 ms-4">
                            <p className="mb-2">Date & Time</p>
                            <h6>{props.date}</h6>
                        </div>
                        <div className="flex-fill"></div>
                    </div>
                    <div className="user d-flex  align-items-center h-25 mt-3">
                        <div className="name-info pe-1 ms-4">
                            <p className="mb-2">Notes</p>
                            <h6>For buying some socks</h6>
                        </div>
                        <div className="flex-fill"></div>
                    </div>
                </div>
                <div className="input h-25 mt-3 w-100 mt-4 d-flex flex-column align-items-center">
                    <div className="align-self-end h-50 mt-3 w-25 mt-5">
                        <button className="btnTransfer h-100 w-100" onClick={props.click}>continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
