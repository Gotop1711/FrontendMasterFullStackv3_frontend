<script setup lang="ts">
import { ref, onMounted, PropType } from 'vue'
import EventService from '@/services/EventService'
import type { Event } from '@/types/Event'

const props = defineProps({
  id: {
    type: Number as PropType<number>,
    required: true
  }
})

const event = ref<Event | null>(null)

onMounted(async () => {
  try {
    const response = await EventService.getEvent(props.id)
    event.value = response.data
  } catch (error) {
    console.error('Error fetching event:', error)
  }
})
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
  </div>
</template>
