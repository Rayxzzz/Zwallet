import React from 'react'

const Header = (props) => {
    const user = JSON.parse(localStorage.getItem('user'))


    return (
        <div className="header d-flex justify-content-center bg-secondary w-100 bg-light">
            <div className="head-content w-75 h-100 d-flex justify-content-between">
                <section className="w-25 h-100 d-flex align-items-center">
                    <h2 style={{ color: '#6379F4' }}>Zwallet</h2>
                </section>
                <section className="w-25 h-100  d-flex align-items-center justify-content-between">
                    <img src='https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg' className='border1' width='52px' alt="" />
                    <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mt-3" style={{ color: "#3A3D42" }}>{user.Name}</h5>
                        <p style={{ color: '#7A7886' }}>+{user.phone}</p>
                    </div>
                    <img src="image/bell.png" alt="" />
                </section>
            </div>
        </div>
    )
}

export default Header
