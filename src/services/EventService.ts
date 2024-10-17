import apiClient from './api'
import type { Event } from '@/types/Event'

export default {
  getEvents() {
    return apiClient.get<Event[]>('/api/events')
  },
  getEvent(id: number) {
    return apiClient.get<Event>(`/api/events/${id}`)
  }
}
