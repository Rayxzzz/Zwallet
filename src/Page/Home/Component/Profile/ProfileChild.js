import React from 'react'

const ProfileChild = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className='w-75 d-flex flex-column align-items-center'>
            <div className='w-25 mt-3 d-flex flex-column align-items-center'>
                <img src='https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg' className='border1' width='52px' alt="" />
                <div className='d-flex w-50 mt-3'>
                <img src="image/Vector.png" height="20px" alt="" />
                <p style={{ color: '#7A7886' }} className='ps-2'>Edit</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="mt-2 h-25" style={{ color: "#3A3D42" }}>{user.Name}</h5>
                    <p style={{ color: '#7A7886' }}>+{user.phone}</p>
                </div>
            </div>
            <div className='w-25 d-flex flex-column align-items-center'>
                <img src="image/profilenav1.png" className='' width='400px' style={{ cursor: 'pointer' }} alt="" />
                <img src="image/profilenav2.png" className='mt-3' width='400px' style={{ cursor: 'pointer' }} alt="" />
                <img src="image/profilenav3.png" className='mt-3' width='400px' style={{ cursor: 'pointer' }} alt="" />
                <img src="image/profilenav4.png" className='mt-3' width='400px' style={{ cursor: 'pointer' }} alt="" />
            </div>
        </div>
    )
}

export default ProfileChild
