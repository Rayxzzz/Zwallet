import React from 'react'
import './button.css'

const Button = (props) => {
    return (
        <div className="size align-self-end mt-5 w-100 mt-5 d-flex justify-content-end">
            <button className="btnTransfer h-100 w-25" onClick={props.click}>continue</button>
        </div>
    )
}

export default Button
