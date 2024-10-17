<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Event } from '@/types/Event'

interface Props {
  event: Event
}

const props = defineProps<Props>()
</script>

<template>
  <RouterLink :to="{ name: 'event-details', params: { id: props.event.id } }" class="event-link">
    <div class="event-card">
      <h2>
        <slot name="eventIndex" />
        {{ props.event.title }}
      </h2>
      <span>@{{ props.event.time }} on {{ props.event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-link {
  text-decoration: none;
  color: inherit;
  display: flex;
}

.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
