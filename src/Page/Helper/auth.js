import { axiosInstance } from "./axios"

export const login = (data) => {
    return axiosInstance.post('/auth/login', data)
}

export const balance = (user) => {
    return axiosInstance.get(`/user/${user}/balance`)
}

export const register = (data) => {
    return axiosInstance.post(`/auth/register`, data)
}