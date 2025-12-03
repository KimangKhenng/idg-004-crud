import { createWebHistory, createRouter } from 'vue-router'

import UserPage from '@/pages/users/UserPage.vue'
import UserInfoPage from '@/pages/users/UserInfoPage.vue'
import ArticlesPage from '@/pages/ArticlesPage.vue'
import ContantMe from '@/pages/contact-me.vue'

const routes = [
    { path: '/', redirect: '/users' },
    { path: '/users', component: UserPage },
    { path: '/users/:userId', component: UserInfoPage },
    { path: '/articles', component: ArticlesPage },
    { path: '/contact-me', component: ContantMe },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;