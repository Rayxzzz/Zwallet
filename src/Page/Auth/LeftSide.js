import React from 'react'
import phone from '../../assets/images/phone-image.png'

function LeftSide() {
    return (
        <div className='left col-7'>
            <div className='p-5 d-flex justify-content-center flex-column'>
            <div className="ps-5 brand-name fw-bolder h-10 text-light">
                    <h3>Zwallet</h3>
                </div>
                <div className="ps-5 h-70 pb-5 d-flex align-items-center">
                    <img src={phone} alt="phone" />
                </div>
                <div className="info-left text-light">
                    <h3>
                        App that Covering Banking Needs.
                    </h3>
                    <p className="lh-lg mt-4">
                        Zwallet is an application that focussing in banking needs for all users
                        in the world. Always updated and always following world trends.
                        5000+ users registered in Zwallet everyday with worldwide
                        users coverage. 
                    </p>
                </div>   
                </div>
        </div>
    )
}

export default LeftSide
