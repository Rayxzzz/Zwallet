import React from 'react'
import './Pin.css'
import Leftside from '../LeftSide'
import RightSide from './Component/RightSide'

const Pin = () => {
    return (
            <div className='main row bg-secondary position-fixed'>
            <Leftside/>
            <RightSide/>
            </div>
        )
}

export default Pin
