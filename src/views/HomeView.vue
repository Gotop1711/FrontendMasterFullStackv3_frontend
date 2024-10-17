<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'
import type { Event } from '@/types/Event'

// Use the Event interface with ref
const events = ref<Event[]>([])

// Type the event parameter in the v-for loop
const getEventIndex = (event: Event): number => {
  return events.value.findIndex((e) => e.id === event.id)
}

onMounted(async () => {
  try {
    const response = await EventService.getEvents()
    events.value = response.data
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching events:', error)
  }
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event">
      <template #eventIndex>{{ getEventIndex(event) }}</template>
    </EventCard>
  </div>
</template>

<style scoped>
.events {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  justify-items: center;
  max-width: max-content;
  margin: 0 auto;
}
</style>
