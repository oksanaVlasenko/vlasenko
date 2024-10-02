import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: () => import('@/components/old/Home.vue'),
    meta: { 
      title: 'Home | Oksana Vlasenko' 
    }  
  },
  { 
    path: '/about', 
    name: 'About', 
    component: () => import('@/components/old/About.vue'),
    meta: { 
      title: 'About me | Oksana Vlasenko' 
    }  
  },
  { 
    path: '/work-history', 
    name: 'Work History', 
    component: () => import('@/components/old/Projects.vue'),
    meta: {
      title: 'Work History | Oksana Vlasenko' 
    }  
  },
  { 
    path: '/contact', 
    name: 'Contact', 
    component: () => import('@/components/old/Contacts.vue'),
    meta: {
      title: 'Contact | Oksana Vlasenko' 
    }  
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Oksana Vlasenko'
})

export default router