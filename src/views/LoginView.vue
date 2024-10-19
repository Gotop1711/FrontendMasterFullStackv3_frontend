<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthService from '@/services/AuthService'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    const response = await AuthService.login({ username: username.value, password: password.value })
    authStore.setToken(response.data.token)
    router.push({ name: 'events' })
  } catch (err: any) {
    error.value = err.response?.data?.message || 'An error occurred during login'
  }
}
</script>

<template>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <div>
      <label for="username">Username:</label>
      <input id="username" v-model="username" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password" v-model="password" type="password" required>
    </div>
    <button type="submit">Login</button>
    <p v-if="error" class="error">{{ error }}</p>
  </form>
</template>

<style scoped>
form {
  max-width: 300px;
  margin: 0 auto;
}

div {
  margin-bottom: 1rem;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 0.5rem;
}

.error {
  color: red;
}
</style>
