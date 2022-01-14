import React from 'react'
import { topup } from '../../../Helper/home'

const Saldo = (props) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const balance = localStorage.getItem('balance')

    const handleClick = () => {
        let text = prompt('input value', '')
        console.log(text)

        topup(user.user_id, {
            balance : Number(text)
        })
        .then((res) => {
            alert(res.data.message)
            localStorage.setItem('balance', Number(balance) + Number(text))
        })
        .catch((err) => {
            console.log(err)
        })
    }


    return (
        <div>
            <div className="a border1 w-100 h-30 d-flex justify-content-between align-items-center">
                <div className="right w-30 h-75 ms-5 pt-3 text-white">
                    <p>Balance</p>
                    <h3>Rp.{props.balance}</h3>
                    <p className="pt-2">+{props.phone}</p>
                </div>
                <div className="left w-30 h-75 me-5 d-flex flex-column justify-content-around align-items-end">
                    <button className="btn1 btn w-75 h-30 fs-5 border border-light text-white">Transfer</button>
                    <button className="btn2 btn w-75 h-30 fs-5 border border-light mt-4 text-white" onClick={handleClick}>Top Up</button>
                </div>
            </div>
        </div>
    )
}

export default Saldo
