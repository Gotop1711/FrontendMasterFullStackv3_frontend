<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'

// Move this interface to a separate file, e.g., src/types/Event.ts
import type { Event } from '@/types/Event'

// Use the Event interface with ref
const events = ref<Event[]>([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    petsAllowed: true,
    organizer: 'Kat Laydee',
  },
  {
    id: 4582797,
    category: 'food',
    title: 'Community Gardening',
    description: 'Join us as we tend to the community edible plants.',
    location: 'Flora City',
    date: 'March 14, 2022',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Fern Pollin',
  },
  {
    id: 8419988,
    category: 'sustainability',
    title: 'Beach Cleanup',
    description: 'Help pick up trash along the shore.',
    location: 'Playa Del Carmen',
    date: 'July 22, 2022',
    time: '11:00',
    petsAllowed: false,
    organizer: 'Carey Wales',
  },
])

// Type the event parameter in the v-for loop
const getEventIndex = (event: Event): number => {
  return events.value.findIndex((e) => e.id === event.id)
}
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
