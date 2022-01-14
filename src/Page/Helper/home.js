import { axiosInstance } from "./axios";


// transaction
export const transactionHistory = (id) => {
    return axiosInstance.get(`/user/${id}/transaction/history`)
} 

export const detailTransaction = (id,invoice) => {
    return axiosInstance.get(`/user/${id}/transaction/${invoice}`)
}

export const processTransfer = (id, invoice, data) => {
    return axiosInstance.put(`/user/${id}/transaction/${invoice}`, data)
}

export const makeInvoice = (id, data) => {
    return axiosInstance.post(`/user/${id}/transaction`, data)
}

// balance
export const topup = (id, data) => {
    return axiosInstance.put(`/user/${id}/top-up`, data)
}


// user
export const allUser  = () => {
    return axiosInstance.get(`/admin/users-list`)
}

export const profile = (id) => {
    return axiosInstance.get(`/user/${id}`)
}