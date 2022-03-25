import React from 'react'
import { changePhone } from '../../../Helper/home'
import { useSelector } from 'react-redux'

const AddPhone2 = () => {
    const { data, loading, error } = useSelector((state) => state.profile)

    let user = JSON.parse(localStorage.getItem('user'))

    const handleClick = () => {
        changePhone( {
            phone : 1
        })
        .then((res) => {
            alert('phone deleted')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className='p-5 w-100'>
            <h4>Manage Phone Number</h4>
            <div className='' style={{ color: '#7A7886' }}>
                <p className='m-0 mt-4'>You can only delete the phone number and then</p>
                <p className='p-0 m-0'>you must add another phone number.</p>
            </div>
            <div className="user d-flex  align-items-center h-25 mt-3">
                <div className="name-info pe-1 ms-4">
                    <p className="mb-2">Phone</p>
                    <h6>+62{data[0].phone}</h6>
                </div>
                <div className="flex-fill"></div>
                <img className='me-5' src="/image/trash.png" alt="" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default AddPhone2