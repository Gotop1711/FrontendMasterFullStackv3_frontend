import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const apiClient = axios.create({
  // withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const token = authStore.token
  if (token) {
    config.headers['x-auth-token'] = token
  }
  return config
})

export default apiClient
