import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import photo1 from '../../../../assets/images/photo 1.png'
import photo2 from '../../../../assets/images/photo3.png'
import photo3 from '../../../../assets/images/photo5.png'
import { transactionHistory } from '../../../Helper/home'
import { useSelector } from 'react-redux'

const History = (props) => {
    const [data, setData] = useState({
        data: []
    })
    const history = useSelector((state) => state.Transaction)
    
    const token = localStorage.getItem('token')
    
    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR"
        }).format(number);
      }


    useEffect(() => {
        transactionHistory(token)
            .then((res) => {
                console.log(res.data.data)
                setData({
                    data: res.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="b-2 border1 ms-2 bg-light">
            <div className="h-100">
                <div className="d-flex justify-content-between h-25 align-items-center px-3">
                    <h6 className="m-0">Transaction History</h6>
                    <Link className='navLink' to='/history'>see all</Link>
                </div>
                <div className="d-flex flex-column historyH overflow-scroll overflow-md-hidden">
                    {data.data.slice(0, 3).map(item =>
                        <div className="d-flex h-100 align-items-center ps-2 pe-2">
                            <img src={item.photo} alt="" width="50px" height="50px" className="mb-3 ms-2 border-img" />
                            <div className="name-info h-100 pe-1 ms-3">
                                <h6 className='mt-2'>{item.name}</h6>
                                <p className='historyN pb-1'>{item.type}</p>
                            </div>
                            <div className="flex-fill"></div>
                            {/* <h6 className={`pb-2 ${item.type === 'Transfer' ? 'historyT' : ''}`}>{item.type === 'Transfer' ? '-' : ''} {rupiah(item.amount).substring(0, rupiah(item.amount).indexOf(','))}</h6> */}
                            <h6 className={`pb-2 ${item.type === 'Transfer' ? 'historyT' : ''}`}>{item.type === 'Transfer' ? '-' : ''} {rupiah(item.amount).substring(0, rupiah(item.amount).indexOf(','))}</h6>
                        </div>
                    )}
                    {history.data.slice(0, 3).map(item =>
                        <div className="d-flex h-100 align-items-center ps-2 pe-2">
                            <img src="https://i.pinimg.com/236x/7f/39/f0/7f39f0ad4dd6b777ab72bc7dc3b91958.jpg" alt="" width="50px" height="50px" className="mb-5 ms-2 border-img" />
                            <div className="name-info h-100 pe-1  ms-3">
                                <h6 className='mt-2'>{item.name}</h6>
                                <p className='historyN pb-1'>{item.type}</p>
                            </div>
                            <div className="flex-fill"></div>
                            {/* <h6 className={`pb-2 ${item.type === 'Transfer' ? 'historyT' : ''}`}>{item.type === 'Transfer' ? '-' : ''} {rupiah(item.amount).substring(0, rupiah(item.amount).indexOf(','))}</h6> */}
                            <h6 className={`p-3 mb-5  ${item.type === 'Transfer' ? 'historyT' : ''}`}>{item.type === 'Transfer' ? '-' : ''} {rupiah(item.amount).substring(0, rupiah(item.amount).indexOf(','))}</h6>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default History
