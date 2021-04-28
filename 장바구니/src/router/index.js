import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
import CartPage from '@/views/CartPage'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/cart',
        name: 'CartPage',
        component: CartPage,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router