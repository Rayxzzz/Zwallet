import React, { useState } from 'react'
import { useEffect } from 'react'
import { AddBalanceSuccess, TopUpBalance } from '../../../../redux/actions/Balance'
import {useDispatch, useSelector} from 'react-redux'
import { Button, Modal, Input } from 'antd';
import '../../../style/dashboard.css'
import { useNavigate } from 'react-router-dom';


const Saldo = (props) => {
    const { data } = useSelector((state) => state.profile)
    const [open, setOpen] = useState(false)
    const [amount, setAmount] = useState()
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

    let phone
    // if(data[0].phone === 1){
    //     phone = <p className="pt-2">not registered</p>
    // } else{
    //     phone = <p className="pt-2">+62{data[0].phone}</p>
    // }

    const handleClick = () => {
        // let text = prompt('input value', '')
        // let value = String(text).split(' ')[0]
        dispatch(AddBalanceSuccess([{balance : Number(amount) + Number(props.balance)}]))
        setAmount()
        setOpen(false)
        // if(text === ''){
        //   return alert('top-up failed')
        // } else if (text <= 0 || value === '0' ){
        //   return alert('top-up failed')
        // } else{
        //     dispatch(TopUpBalance({
        //         balance : Number(text)
        //     },token))
        //     .then((res) => {
        //         dispatch(AddBalanceSuccess([{balance : Number(text) + props.balance}]))
        //         console.log('success')
        //     })
        //     .catch((err) => {
        //         console.log('saldo');
        //     })
        // }
    }


    return (
        <div>
     <Modal
        title="Amount"
        open={open}
        footer={[
            <Button onClick={handleClick}>
                Submit
            </Button>
            ]}
        // confirmLoading={confirmLoading}
        onCancel={()=> setOpen(false)}
      >
        <Input value={amount} onChange={(e)=>setAmount(e.target.value)} prefix="Rp" suffix="IDR" type="number" className='ps-3'/>
      </Modal>
            <div className="a border1 h-30 d-flex justify-content-between align-items-center">
                <div className="right w-30 h-75 ms-5 pt-3 text-white">
                    <p>Balance</p>
                    <h3>{rupiah(props.balance).substring(0, rupiah(props.balance).indexOf(','))}</h3>
                    +{phone || props.phone}
                </div>
                <div className="w-30 h-75 me-5 d-flex flex-column justify-content-around align-items-end">
                    <button className="btn1 d-none d-md-block btn fs-5 ps-4 border border-light text-white" onClick={()=>navigate('/transfer')}>Transfer</button>
                    <button className="btn2 d-none d-md-block btn ps-4 fs-5 border border-light mt-4 text-white" onClick={()=>setOpen(true)}>Top Up</button>
                </div>
            </div>
            <div className="w-100 h-100 me-5 d-flex d-md-none justify-content-around align-items-end">
                    <button className="btn1 button-color btn fs-5 ps-4 border border-light text-white" onClick={()=>navigate('/transfer')}>Transfer</button>
                    <button className="btn2 button-color btn ps-4 fs-5 border border-light mt-4 text-white" onClick={()=>setOpen(true)}>Top Up</button>
            </div>
        </div>
    )
}

export default Saldo
