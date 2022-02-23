import { axiosInstance } from "./axios";


let token = localStorage.getItem('token')


// transaction
export const transactionHistory = () => {
    return axiosInstance.get(`/user/transaction/history`, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
} 

export const detailTransaction = (id,invoice) => {
    return axiosInstance.get(`/user/transaction/${invoice}`, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const processTransfer = (id, invoice, data) => {
    return axiosInstance.put(`/user/transaction/${invoice}`, data, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const makeInvoice = (id, data) => {
    return axiosInstance.post(`/user/transaction`, data, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

// balance
export const topup = (data) => {
    return axiosInstance.put(`/user/top-up`, data, { 
        headers: {"Authorization" : `Bearer ${token}`} 
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

export const profileId = (id) => {
    return axiosInstance.get(`/user/${id}`, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const changePin = (id, data) => {
    return axiosInstance.put(`/user/profile/pin`, data, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const changePhone = (id, data) => {
    return axiosInstance.put(`/user/profile/phone`, data, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}