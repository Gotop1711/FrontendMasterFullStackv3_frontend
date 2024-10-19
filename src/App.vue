<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import router from './router';

const authStore = useAuthStore()

const logout = () => {
  authStore.clearToken()
  // Optionally redirect to login page
  router.push({ name: 'login' })
}
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">About</RouterLink> |
          <template v-if="!authStore.isAuthenticated">
            <RouterLink to="/register">Register</RouterLink> |
            <RouterLink to="/login">Login</RouterLink>
          </template>
          <template v-else>
            <RouterLink to="/events">Events</RouterLink> |
            <a href="#" @click.prevent="logout">Logout</a>
          </template>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h2 {
  font-size: 20px;
}
</style>
