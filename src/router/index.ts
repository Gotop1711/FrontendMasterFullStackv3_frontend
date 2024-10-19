import { createRouter, createWebHistory } from 'vue-router'
import EventsView from '../views/EventsView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import EventFormView from '../views/EventFormView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      component: EventDetailsView,
      props: (route) => ({ id: Number(route.params.id) })
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventFormView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
