import React from 'react'
import FormPin from './FormPin'

const RightSide = () => {
    return (
        <div className='col bg-light'>
            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <div className='w-75 h-75 d-flex flex-column mb-5'>
                    <div className="info-right d-flex justify-content-between flex-column ">
                        <h3 className="lh-sm fw-normal fs-4">
                            Secure Your Account, Your Wallet,
                            and Your Data With 6 Digits PIN
                            That You Created Yourself.
                        </h3>
                        <p className="lh-lg fs-7 mt-3 mb-5">
                            Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.
                        </p>
                    </div>
                    <FormPin />
                </div>
            </div>
        </div>
    )
}

export default RightSide 
