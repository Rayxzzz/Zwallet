import { axiosInstance } from "./axios";


let token = localStorage.getItem('token')


// transaction
export const transactionHistory = (token1) => {
    return axiosInstance.get(`/user/transaction/history`, { 
        headers: {"Authorization" : `Bearer ${token1}`} 
    })
} 

export const detailTransaction = (invoice) => {
    return axiosInstance.get(`/user/transaction/${invoice}`, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const processTransfer = (invoice, data) => {
    return axiosInstance.put(`/user/transaction/${invoice}`, data, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const makeInvoice = (data, token1) => {
    return axiosInstance.post(`/user/transaction`, data, { 
        headers: {"Authorization" : `Bearer ${token1}`} 
    })
}

// balance
export const topup = (data, token1) => {
    return axiosInstance.put(`/user/top-up`, data, { 
        headers: {"Authorization" : `Bearer ${token1}`} 
    })
}


// user
export const allUser  = () => {
    return axiosInstance.get(`/admin/users-list2`, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const profile = (id) => {
    return axiosInstance.get(`/user/`, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const profileId = (id, token1) => {
    return axiosInstance.get(`/user/${id}`, { 
        headers: {"Authorization" : `Bearer ${token1}`} 
    })
}

export const changePin = (id, data) => {
    return axiosInstance.put(`/user/profile/pin`, data, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const changePhone = (data, token1) => {
    return axiosInstance.put(`/user/profile/phone`, data, { 
        headers: {"Authorization" : `Bearer ${token1}`} 
    })
}