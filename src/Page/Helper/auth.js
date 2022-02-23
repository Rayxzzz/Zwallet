import { axiosInstance } from "./axios"

let token = localStorage.getItem('token')

export const login = (data) => {
    return axiosInstance.post('/auth/login', data)
}

export const balance = () => {
    return axiosInstance.get(`/user/balance`, { 
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}

export const register = (data) => {
    return axiosInstance.post(`/auth/register`, data)
}