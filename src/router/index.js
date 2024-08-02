import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../components/Projects.vue'
import AboutView from '../components/About.vue'

const routes = [
  { 
    path: '/', 
    name: 'About', 
    component: AboutView,
    meta: { 
      title: 'About me | Oksana Vlasenko' 
    }  
  },
  { 
    path: '/work-history', 
    name: 'Work History', 
    component: HomeView,
    meta: {
      title: 'Work History | Oksana Vlasenko' 
    }  
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Oksana Vlasenko'
})

export default router