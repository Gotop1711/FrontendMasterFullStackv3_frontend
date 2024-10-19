<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthService from '@/services/AuthService'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

const register = async () => {
  try {
    await AuthService.register({ username: username.value, email: email.value, password: password.value })
    router.push({ name: 'login' })
  } catch (err: any) {
    error.value = err.response?.data?.message || 'An error occurred during registration'
  }
}
</script>

<template>
  <form @submit.prevent="register">
    <h2>Register</h2>
    <div>
      <label for="username">Username:</label>
      <input id="username" v-model="username" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="email" type="email" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password" v-model="password" type="password" required>
    </div>
    <button type="submit">Register</button>
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
