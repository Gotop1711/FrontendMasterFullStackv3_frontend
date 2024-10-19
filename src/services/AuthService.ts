import apiClient from './api'

interface UserCredentials {
  username: string
  email: string
  password: string
}

interface LoginCredentials {
  username: string
  password: string
}

export default {
  register(credentials: UserCredentials) {
    return apiClient.post('/api/users/register', credentials)
  },
  login(credentials: LoginCredentials) {
    return apiClient.post('/api/users/login', credentials)
  }
}
