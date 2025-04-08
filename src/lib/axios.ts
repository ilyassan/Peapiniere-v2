import Axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios"

const axios: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})

axios.interceptors.request.use(
  (config) => {
    const token: string | null = localStorage.getItem("jwt_token")
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: unknown): Promise<never> => Promise.reject(error)
)

axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("jwt_token")
      window.location.href = "/auth/login"
    }
    return Promise.reject(error)
  }
)

export default axios