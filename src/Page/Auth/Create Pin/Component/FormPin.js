import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import InputPin from '../../../../Component/pin/inputPin'


const FormPin = (props) => {


    return (
        <Fragment>
            <form className="h-55 d-flex flex-column mt-5" onSubmit={props.submit}>
                <div className="input-login w-100 h-30 d-flex justify-content-between" >
                   <InputPin click={props.change}/>
                    {/* {errorMsg && <p className='text-danger pt-2'>{errorMsg}</p>} */}
                </div>
                {props.one && props.two && props.three && props.four && props.five && props.six ? 
                <button className='btn-loginOn mt-5'>Confirm</button>
                :
                <button className='btn-login mt-5' disabled>Confirm</button>
            }
            </form>
        </Fragment>
    )
}

export default FormPin
