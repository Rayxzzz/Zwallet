import { axiosInstance } from "../../Page/Helper/axios"

const token = localStorage.getItem('token')

export const GetProfileRequest = ()=> {
    return {
        type: 'GET_PROFILE_REQUEST'
    }
}
export const GetProfileSuccess = (data)=> {
    return {
        type: 'GET_PROFILE_SUCCESS',
        payload: data
    }
}

export const GetProfileFail = (error)=> {
    return {
        type: 'GET_PROFILE_FAIL',
        payload: error
    }
}

export const PutProfile = (data)=> {
    return {
        type: 'PUT_PROFILE_SUCCESS',
        payload: data
    }
}


export const GetProfile = (token1)=> {
    return (dispatch) => {
        dispatch(GetProfileRequest())
        return axiosInstance.get(`/user/`,{
            headers: {
              'Authorization': `Bearer ${token1}` 
            }
          }).then((res)=> {
           const data =  res.data?.data
           dispatch(GetProfileSuccess(data))
        }).catch((err)=>{
            console.log(err.response.data)
            const message =  err.message
            dispatch(GetProfileFail(message))
        })
    }
}

export const changeProfile = (data) => {
    return (dispatch) => {
        return axiosInstance.put(`/user/profile`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res)=>{
            const result = res.data?.data.message
            dispatch(PutProfile(result))
            
        }).then((res)=>{
            dispatch(GetProfile())
        }).catch((err)=>{
            const message =  err.message
            console.log(message)
        })
    }
}
            
