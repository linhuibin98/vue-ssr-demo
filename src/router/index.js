import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../pages/index.vue')
    },
    {
        path: '/home',
        component: () => import('../pages/home.vue')
    },
    {
        path: '/about',
        component: () => import('../pages/about.vue')
    }
];

const isServer = typeof window === 'undefined';

const history = isServer ? createMemoryHistory() : createWebHistory();

const router = createRouter({
    history,
    routes
});

export default router;