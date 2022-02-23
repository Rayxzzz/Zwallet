import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Header = (props) => {
    const { data, loading, error } = useSelector((state) => state.profile)
    let phone
    if(data[0].phone === 1){
        phone = <p style={{ color: '#7A7886' }} className='mt-0'>not registered</p>
    } else{
        phone = <p style={{ color: '#7A7886' }} className='mt-0'>+62{data[0].phone}</p>
    }

    const hai = 'j'

    return (
        <div className="header d-flex justify-content-center bg-secondary w-100 bg-light">
            <div className="head-content w-75 h-100 d-flex justify-content-between">
                <section className="w-25 h-100 d-flex align-items-center">
                    <h2 style={{ color: '#6379F4' }}>Zwallet</h2>
                </section>
                <section className="w-25 h-100  d-flex align-items-center justify-content-between">
                    <img src={hai} className='border1' width='52px' alt="" />
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mt-3" style={{ color: "#3A3D42" }}>{data[0].Name}</h5>
                        {phone}
                    </div>
                    <img src="image/bell.png" alt="" />
                </section>
            </div>
        </div>
    )
}

export default Header
