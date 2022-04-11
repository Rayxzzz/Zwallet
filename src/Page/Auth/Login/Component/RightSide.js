import React from 'react'
import FormLogin from './FormLogin'

const RightSide = () => {
    return (
        <div className='main-mobile desktop-main col-md-5 col-sm-12'>
            <h1 className='text-center zwallet-mobile d-sm-block d-md-none'>Zwallet</h1>
            <div className='form-desktop fade-up-mobile w-100 form d-flex justify-content-center align-items-center '>
                <div className='w-75 h-75 d-flex flex-column mb-5'>
                    <div className="info-right d-flex justify-content-between flex-column ">
                        <h1 className='text-center d-sm-block d-md-none mb-4'>Login</h1>
                        <p className='text-center text-form d-sm-block d-md-none'>Login to your existing account to access
                            all the features in Zwallet.</p>
                        <h3 className="lh-sm fw-normal fs-4 d-md-flex d-none">
                            Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users
                        </h3>
                        <p className="lh-lg fs-7 mt-3 mb-5 d-md-flex d-none">
                            Transfering money is eassier than ever, you can access{"\n"}
                            Zwallet wherever you are. Desktop, laptop, mobile phone?{"\n"}
                            we cover all of that for you!
                        </p>
                    </div>
                    <FormLogin />
                </div>
            </div>
        </div>
    )
}

export default RightSide 
