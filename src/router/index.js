import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Contacts from '@/components/Contacts.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/resume', component: Resume },
  { path: '/contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    console.log(to, ' to')
    const sectionIdMap = {
      '/': 'home-page', 
      '/about': 'about',
      '/resume': 'resume',
      '/contacts': 'contacts',
    };
    
    const sectionId = sectionIdMap[to.path];
    const element = document.getElementById(sectionId);

    console.log(sectionId, ' id', element)
    if (element) {
      return {
        el: element,
        behavior: 'smooth',
      };
    }

    //return { top: 0 };
  },
});

export default router;
