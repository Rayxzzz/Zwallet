import React from 'react'

const InputPin = (props) => {
    return (
        <div>
                     <input
                        type="text"
                        placeholder="_"
                        className="pin p-1"
                        name='pin1'
                        onChange={props.click}
                    />
                    <input
                        type="text"
                        placeholder="_"
                        className="pin p-1"
                        name='pin2'
                        onChange={props.click}
                    /><input
                        type="text"
                        placeholder="_"
                        className="pin p-1"
                        name='pin3'
                        onChange={props.click}
                    /><input
                        type="text"
                        placeholder="_"
                        className="pin p-1"
                        name='pin4'
                        onChange={props.click}
                    /><input
                        type="text"
                        placeholder="_"
                        className="pin p-1"
                        name='pin5'
                        onChange={props.click}
                    /><input
                        type="text"
                        placeholder="_"
                        className="pin p-1"
                        name='pin7'
                        onChange={props.click}
                    />
        </div>
    )
}

export default InputPin
