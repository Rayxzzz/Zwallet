import React from 'react'
import '../../../style/dashboard.css'
import jwt_decode from "jwt-decode";

const ListUser = (props) => {
    let token = localStorage.getItem('token')
    let decoded = jwt_decode(token)
    let data = props.data.filter((item) => item.user_id !== decoded.userid)
    console.log(decoded.userid)
    console.log(data)
    
    return (
        <div className="fade-up w-100 h-100 d-flex align-items-center">
            <div className="listUser a-content">
                <div className="ms-5 d-flex justify-content-between h-10 align-items-center">
                    <h5 className="m-0">Search Receiver</h5>
                </div>
                <div className="d-flex ms-5 justify-content-between h-10 align-items-center mt-4">
                    <input type="text" placeholder="Enter your e-mail" className="search w-100 h-80"/>
                </div>
                <div className="overflow-scroll this-week mt-5 ms-4 h-75 d-flex flex-column justify-content-between">
                    {data.map((item) => 
                    
                    <div className="user d-flex align-items-center mt-4" onClick={props.events} id={item.user_id}>
                        <img src={`${item.photo ? item.photo : 'https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg'}`} alt="" width="50px" height="50px" className="mb-1 ms-3 border-img"/>
                        <div className="name-info pe-1 ms-4 pt-3">
                            <h6>{item.Name}</h6>
                            <p className='historyN'>{item.phone === 1 ? 'not registered' : `+62${item.phone}` }</p>
                        </div>
                        <div className="flex-fill"></div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListUser
