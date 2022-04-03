import React from 'react'
import Receiver from './Receiver'
import { useSelector } from 'react-redux'
import '../../../style/dashboard.css'


const AmountTransfer = (props) => {
    const { data, loading, error } = useSelector((state) => state.balance)

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }
      
    return (
        <div className="fade-up w-100 h-100 d-flex justify-content-center align-items-center">
            <div className="amountPage">
                <div className="d-flex justify-content-between h-10 align-items-center">
                    <h5 className="m-0">Transfer Money</h5>
                </div>
                <div className="mt-4 ms-5 h-15 d-flex flex-column justify-content-between">
                    <Receiver id={props.id} name={props.name} phone={props.phone} image={props.image}/>
                </div>
                <div className="d-flex justify-content-between h-10 align-items-center">
                    <p className="mt-3">
                        Type the amount you want to transfer and then
                        press continue to the next steps.
                </p>
            </div>
            <div className="input h-50 w-100 mt-4 d-flex flex-column align-items-center">
                <div className="h-30 w-40 d-flex justify-content-center">
                    <input type='number' value={props.value} onChange={props.amount} className="amount" placeholder="0.00"/>
                </div>
                <div>
                    <p className="fs-5 fw-bolder">{rupiah(data[0].balance, "Rp. ").substring(0, rupiah(data[0].balance).indexOf(','))} Available </p>
                </div>
                <div>
                    <input maxLength={20} value={props.message} onChange={props.message2} type="text" placeholder="Add some notes" className="message w-100 mt-3"/>
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
