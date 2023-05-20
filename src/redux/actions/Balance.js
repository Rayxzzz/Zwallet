import { axiosInstance } from "../../Page/Helper/axios"
import { topup } from "../../Page/Helper/home"

const token = localStorage.getItem('token')

export const GetBalanceRequest = ()=> {
    return {
        type: 'GET_BALANCE_REQUEST'
    }
}
export const GetBalanceSuccess = (data)=> {
    return {
        type: 'GET_BALANCE_SUCCESS',
        payload: data
    }
}

export const GetBalanceFail = (error)=> {
    return {
        type: 'GET_BALANCE_FAIL',
        payload: error
    }
}

export const PutBalaceSuccess = (data)=> {
    return {
        type: 'PUT_BALANCE_SUCCESS',
        payload: data
    }
}

export const AddBalanceSuccess = (data)=> {
    return {
        type: 'ADD_BALANCE_SUCCESS',
        payload: data
    }
}

export const GetBalance = (token1)=> {
    return (dispatch) => {
        dispatch(GetBalanceRequest())
        return axiosInstance.get(`/user/balance`,{
            headers: {
              'Authorization': `Bearer ${token1}` 
            }
          }).then((res)=> {
           const data =  res.data?.data
           dispatch(GetBalanceSuccess(data))
        }).catch((err)=>{
            const message =  err.message
            dispatch(GetBalanceSuccess([{balance : 100000}]))
            dispatch(GetBalanceFail(message))
        })
    }
}

export const TopUpBalance = (data, token1) => {
    return (dispatch) => {
        return topup(data, token1)
        .then((res)=>{
            console.log(res.data)
            const result = res.data.message
            dispatch(PutBalaceSuccess(result))
        })
        .then((res)=>{
            dispatch(GetBalance(token))
        })
        .catch((err)=>{
            console.log(err)
            const message =  err.message
            console.log(message)
        })
    }
}