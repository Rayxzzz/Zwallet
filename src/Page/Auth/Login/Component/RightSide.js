import React from 'react'
import FormLogin from './FormLogin'

const RightSide = () => {
    return (
        <div className='col-5 bg-light'>
            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <div className='w-75 h-75 d-flex flex-column mb-5'>
                <div className="info-right d-flex justify-content-between flex-column ">
                    <h3 className="lh-sm fw-normal fs-4">
                        Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users
                    </h3>
                    <p className="lh-lg fs-7 mt-3 mb-5">
                        Transfering money is eassier than ever, you can access{"\n"}
                        Zwallet wherever you are. Desktop, laptop, mobile phone?{"\n"}
                        we cover all of that for you!
                    </p>
                </div>
                <FormLogin/>
                </div>
            </div>
        </div>
    )
}

export default RightSide 
