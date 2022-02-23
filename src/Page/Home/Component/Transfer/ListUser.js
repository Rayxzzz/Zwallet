import React from 'react'

const ListUser = (props) => {
    return (
        <div className="w-100 h-100 d-flex align-items-center">
            <div className="listUser a-content">
                <div className="ms-5 d-flex justify-content-between h-10 align-items-center">
                    <h5 className="m-0">Search Receiver</h5>
                </div>
                <div className="d-flex ms-5 justify-content-between h-10 align-items-center mt-4">
                    <input type="text" placeholder="Enter your e-mail" className="search w-100 h-80"/>
                </div>
                <div className="overflow-scroll this-week mt-5 ms-4 h-75 d-flex flex-column justify-content-between">
                    {props.data.map((item) => 
                    <div className="user d-flex align-items-center mt-4" onClick={props.events} id={item.user_id}>
                        <img src='https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg' alt="" width="50px" height="50px" className="mb-1 ms-3"/>
                        <div className="name-info pe-1 ms-4 pt-3">
                            <h6>{item.Name} ({item.user_id})</h6>
                            <p>+{item.phone}</p>
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
