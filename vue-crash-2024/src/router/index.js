import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFound from '@/views/NotFound.vue'
import JobDetailView from '@/views/JobDetailView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component : HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component : JobsView
        },
        {
            path: '/jobs/:id',
            name: 'job-detail',
            component : JobDetailView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component : NotFound
        },
    ]
})

export default router