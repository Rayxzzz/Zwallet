import { axiosInstance } from "../../Page/Helper/axios"


export const GetNotificationRequest = ()=> {
    return {
        type: 'GET_NOTIFICATION_REQUEST'
    }
}
export const GetNotificationSuccess = (data)=> {
    return {
        type: 'GET_NOTIFICATION_SUCCESS',
        payload: data
    }
}

export const GetNotificationFail = (error)=> {
    return {
        type: 'GET_NOTIFICATION_FAIL',
        payload: error
    }
}

export const PutNotificationSuccess = (data)=> {
    return {
        type: 'PUT_NOTIFICATION_SUCCESS',
        payload: data
    }
}

export const GetNotification = (token1)=> {
    return (dispatch) => {
        dispatch(GetNotificationRequest())
        return axiosInstance.get('user/transaction/historySuccess',{
            headers: {"Authorization" : `Bearer ${token1}`} 
        })
          .then((res)=> {
           const data =  res.data.data
           console.log(res.data.data)
           dispatch(GetNotificationSuccess(data))
        }).catch((err)=>{
            console.log(err.response.data)
            const message =  err.message
            dispatch(GetNotificationFail(message))
        })
    }
}