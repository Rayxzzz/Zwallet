import React from 'react'
import './pinConfirm.css'
import InputPin from '../../Component/pin/inputPin'
import Button from '../../Component/button/Button'

const PinPopUp = () => {
    return (
        <div className='confirmPin position-fixed d-flex justify-content-center align-items-center'>
            <div className='pinBody bg-light p-4 mb-5'>
                <h5>Enter PIN to Transfer</h5>
                <p className='mt-4'>Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                <div className='mt-5'>
                <InputPin/>
                </div>
                <Button/>

            </div>
        </div>
    )
}

export default PinPopUp
