<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue'
import { useRouter } from 'vue-router'
import EventService from '@/services/EventService'
import type { Event } from '@/types/Event'

const props = defineProps({
  id: {
    type: Number as PropType<number>,
    required: true
  }
})

const router = useRouter()
const event = ref<Event | null>(null)

onMounted(async () => {
  try {
    const response = await EventService.getEvent(props.id)
    event.value = response.data
  } catch (error) {
    console.error('Error fetching event:', error)
  }
})

const deleteEvent = async () => {
  if (!event.value) return

  if (confirm('Are you sure you want to delete this event?')) {
    try {
      await EventService.deleteEvent(event.value.id)
      router.push({ name: 'events' })
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }
}
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.description }}</p>
    <p>{{ event.date }} at {{ event.time }}</p>
    <p>Location: {{ event.location }}</p>
    <p>Organizer: {{ event.organizer }}</p>
    <p>Category: {{ event.category }}</p>
    <p>Pets Allowed: {{ event.petsAllowed ? 'Yes' : 'No' }}</p>
    <button @click="deleteEvent" class="delete-button">Delete Event</button>
  </div>
  <div v-else>
    Loading event...
  </div>
</template>

<style scoped>
.delete-button {
  background-color: #ff4136;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.delete-button:hover {
  background-color: #d0342b;
}
</style>
