import React from 'react'
import './Pin.css'
import Leftside from './Component/LeftSide'
import RightSide from './Component/RightSide'

const Pin = () => {
    return (
            <div className='main row bg-secondary'>
            <Leftside/>
            <RightSide/>
            </div>
        )
}

export default Pin
