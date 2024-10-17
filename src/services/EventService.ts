import apiClient from './api'
import type { Event } from '@/types/Event'

export default {
  getEvents() {
    return apiClient.get<Event[]>('/api/events')
  },
  getEvent(id: number) {
    return apiClient.get<Event>(`/api/events/${id}`)
  },
  createEvent(event: Omit<Event, 'id'>) {
    return apiClient.post<Event>('/api/events', event)
  },
  updateEvent(id: number, event: Event) {
    return apiClient.put<Event>(`/api/events/${id}`, event)
  },
  deleteEvent(id: number) {
    return apiClient.delete(`/api/events/${id}`)
  }
}
