import React from 'react'

const ListHistory = (props) => {

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }

    return (
            <div className="listHistory h-100 d-flex mt-5">
                <div className="a-content h-90 w-100">
                    <div className="d-flex justify-content-between h-10 align-items-center">
                        <h5 className="m-0">Transaction History</h5>
                    </div>
                    <div className="d-flex justify-content-between h-10 align-items-center mt-5">
                        {/* <h7 className="mt-0">This Week</h7> */}
                    </div>
                    <div className="this-week overflow-scroll mt-4  d-flex flex-column justify-content-between">
                    {props.data.map(item => 
                            <div className="d-flex mt-3 align-items-center">
                                <img src={item.photo} alt="" width="50px" height="50px" className="mb-4 border-img"/>
                                <div className="name-info pe-1 ms-4">
                                    <h6>{item.name}</h6>
                                    <p>{item.type}</p>
                                </div>
                                <div className="flex-fill"></div>
                                <h6 className={`pb-2 ${item.type === 'Transfer' ? 'historyT' : ''}`}>{item.type === 'Transfer' ? '-' : ''} {rupiah(item.amount).substring(0, rupiah(item.amount).indexOf(','))}</h6>
                            </div>
                        )}
                        </div>
                </div>
            </div>
    )
}

export default ListHistory
