import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LiveChat from '../views/LiveChat.vue'
import Projects from '../views/Projects.vue'
import Bugs from '../views/Bugs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/live-chat',
    name: 'LiveChat',
    component: LiveChat
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/bugs',
    name: 'Bugs',
    component: Bugs
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
