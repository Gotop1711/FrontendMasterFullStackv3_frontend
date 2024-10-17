<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import EventService from '@/services/EventService'
import type { Event } from '@/types/Event'

const router = useRouter()

const event = ref<Omit<Event, 'id'>>({
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  petsAllowed: false,
  organizer: ''
})

const submitForm = async () => {
  try {
    await EventService.createEvent(event.value)
    router.push({ name: 'home' })
  } catch (error) {
    console.error('Error creating event:', error)
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <h1>Create an Event</h1>
    <div>
      <label for="title">Title:</label>
      <input id="title" v-model="event.title" required>
    </div>
    <div>
      <label for="category">Category:</label>
      <input id="category" v-model="event.category" required>
    </div>
    <div>
      <label for="description">Description:</label>
      <textarea id="description" v-model="event.description" required></textarea>
    </div>
    <div>
      <label for="location">Location:</label>
      <input id="location" v-model="event.location" required>
    </div>
    <div>
      <label for="date">Date:</label>
      <input id="date" v-model="event.date" type="date" required>
    </div>
    <div>
      <label for="time">Time:</label>
      <input id="time" v-model="event.time" type="time" required>
    </div>
    <div>
      <label for="petsAllowed">Pets Allowed:</label>
      <input id="petsAllowed" v-model="event.petsAllowed" type="checkbox">
    </div>
    <div>
      <label for="organizer">Organizer:</label>
      <input id="organizer" v-model="event.organizer" required>
    </div>
    <button type="submit">Create Event</button>
  </form>
</template>

<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
}

div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
}

button {
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}
</style>
