import React from 'react'

const ListHistory = (props) => {
    return (
            <div className="listHistory h-100 d-flex mt-5">
                <div className="a-content h-90 w-100">
                    <div className="d-flex justify-content-between h-10 align-items-center">
                        <h5 className="m-0">Transaction History</h5>
                    </div>
                    <div className="d-flex justify-content-between h-10 align-items-center mt-5">
                        <h7 className="mt-0">This Week</h7>
                    </div>
                    <div className="this-week overflow-scroll mt-4  d-flex flex-column justify-content-between">
                    {props.data.map(item => 
                            <div className="d-flex mt-3 align-items-center">
                                <img src='https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg' alt="" width="50px" height="50px" className="mb-4"/>
                                <div className="name-info pe-1 ms-4">
                                    <h6>{item.receiver} ({item.status})</h6>
                                    <p>{item.date}</p>
                                </div>
                                <div className="flex-fill"></div>
                                <h6 className="pb-2">Rp.{item.amount}</h6>
                            </div>
                        )}
                        </div>
                </div>
            </div>
    )
}

export default ListHistory
