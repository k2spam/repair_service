import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue';
import ModelPage from '@/pages/ModelPage.vue';
import AboutPage from '@/pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/model',
      name: 'model',
      component: ModelPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ],
  scrollBehavior() {
      return { top: 0 };
  },
})

export default router
