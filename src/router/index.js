import {createRouter, createWebHistory} from 'vue-router';

import store from '@/store';

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
        meta: {
            auth: true,
        },
    },
    {
        path: '/add',
        name: 'add',
        component: () => import('@/views/PostAddPage.vue'),
        meta: {
            auth: true,
        },
    },
    {
        path: '/post/:id',
        name: 'edit',
        component: () => import('@/views/PostEditPage.vue'),
        meta: {
            auth: true,
        },
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

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.getters.isLogin) {
        next('/login');
        return;
    }
    next();
});

export default router;
