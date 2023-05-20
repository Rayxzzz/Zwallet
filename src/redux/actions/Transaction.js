import { axiosInstance } from "../../Page/Helper/axios"
import { topup } from "../../Page/Helper/home"

const token = localStorage.getItem('token')

export const GetHistoryList = ()=> {
    return {
        type: 'GET_HISTORY_LIST'
    }
}
export const GetHistorySuccess = (data)=> {
    return {
        type: 'GET_HISTORY_LIST_SUCCESS',
        payload: data
    }
}

export const AddTransactionSuccess = (data)=> {
    return {
        type: 'ADD_TRANSACTION_SUCCESS',
        payload: data
    }
}

