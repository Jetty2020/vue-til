import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignupPage.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFoundPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
