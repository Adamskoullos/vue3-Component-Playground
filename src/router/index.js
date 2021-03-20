import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue'
import Projects from '../views/Projects.vue'
import Bugs from '../views/Bugs.vue'
import NewBug from '../views/NewBug.vue'
import NewProject from '../views/NewProject.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/new-project',
    name: 'NewProject',
    component: NewProject
  },
  {
    path: '/bugs',
    name: 'Bugs',
    component: Bugs
  },
  {
    path: '/new-bug',
    name: 'NewBug',
    component: NewBug
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
