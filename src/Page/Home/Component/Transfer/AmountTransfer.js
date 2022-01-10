import React from 'react'
import Receiver from './Receiver'

const AmountTransfer = (props) => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="amountPage">
                <div className="d-flex justify-content-between h-10 align-items-center">
                    <h5 className="m-0">Transfer Money</h5>
                </div>
                <div className="mt-4 ms-5 h-15 d-flex flex-column justify-content-between">
                    <Receiver id={props.id}/>
                </div>
                <div className="d-flex justify-content-between h-10 align-items-center">
                    <p className="mt-3">
                        Type the amount you want to transfer and then
                        press continue to the next steps.
                </p>
            </div>
            <div className="input h-50 w-100 mt-4 d-flex flex-column align-items-center">
                <div className="h-30 w-40 d-flex justify-content-center">
                    <input value={props.value} onChange={props.amount} className="amount" type="text" placeholder="0.00"/>
                </div>
                <div>
                    <p className="fs-5 fw-bolder">Rp.{localStorage.getItem('balance')} Available </p>
                </div>
                <div>
                    <input type="text" placeholder="Add some notes" className="message w-100 mt-3"/>
                </div>
                <div className="flex-fill"></div>
                <div className="align-conten align-self-end h-25 w-25">
                    <button className="btnTransfer h-100 w-100 mt-4" onClick={props.click}>continue</button>
                </div>
            </div>
        </div> 
                    </div >
    )
}

export default AmountTransfer
