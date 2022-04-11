import React from 'react'
import { useEffect } from 'react'
import { TopUpBalance } from '../../../../redux/actions/Balance'
import {useDispatch, useSelector} from 'react-redux'
import '../../../style/dashboard.css'


const Saldo = (props) => {
    const { data } = useSelector((state) => state.profile)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    useEffect(()=>{
       
    },[])

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

    let phone
    if(data[0].phone === 1){
        phone = <p className="pt-2">not registered</p>
    } else{
        phone = <p className="pt-2">+62{data[0].phone}</p>
    }

    const handleClick = () => {
        let text = prompt('input value', '')
        let value = String(text).split(' ')[0]
        console.log(value)
        if(text === ''){
          return alert('top-up failed')
        } else if (text <= 0 || value === '0' ){
          return alert('top-up failed')
        } else{
            dispatch(TopUpBalance({
                balance : Number(text)
            },token))
            .then((res) => {
                console.log('success')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }


    return (
        <div>
            <div className="a border1 w-100 h-30 d-flex justify-content-between align-items-center">
                <div className="right w-30 h-75 ms-5 pt-3 text-white">
                    <p>Balance</p>
                    <h3>{rupiah(props.balance).substring(0, rupiah(props.balance).indexOf(','))}</h3>
                    {phone}
                </div>
                <div className="w-30 h-75 me-5 d-flex flex-column justify-content-around align-items-end">
                    <button className="btn1 d-none d-md-block btn fs-5 ps-4 border border-light text-white">Transfer</button>
                    <button className="btn2 d-none d-md-block btn ps-4 fs-5 border border-light mt-4 text-white" onClick={handleClick}>Top Up</button>
                </div>
            </div>
        </div>
    )
}

export default Saldo
