import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'About', 
    component: () => import('../components/About.vue'),
    meta: { 
      title: 'About me | Oksana Vlasenko' 
    }  
  },
  { 
    path: '/work-history', 
    name: 'Work History', 
    component: () => import('../components/Projects.vue'),
    meta: {
      title: 'Work History | Oksana Vlasenko' 
    }  
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: () => import('../components/Contacts.vue'),
    meta: {
      title: 'Contact | Oksana Vlasenko' 
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