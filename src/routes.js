import { createWebHistory, createRouter } from 'vue-router'

import UserPage from './pages/UserPage.vue'
import ArticlesPage from './pages/ArticlesPage.vue'

const routes = [
    { path: '/', redirect: '/users' },
    { path: '/users', component: UserPage },
    { path: '/articles', component: ArticlesPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;