import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../views/AuthView.vue')
        },
        {
            path: '/auth-firebase',
            name: 'auth-firebase',
            component: () => import('../views/FirebaseAuthView.vue')
        },
        {
            path: '/auth-social',
            name: 'auth-social',
            component: () => import('../views/AuthSocialView.vue')
        },
        {
            path: '/auth-aws',
            name: 'auth-aws',
            component: () => import('../views/AWSView.vue')
        },
        {
            path: '/auth-azure',
            name: 'auth-azure',
            component: () => import('../views/AzureView.vue')
        },





        {
            path: '/reloj-digital',
            name: 'reloj-digital',
            component: () => import('../views/RelojDigitalView.vue')
        }
    ]
})

export default router