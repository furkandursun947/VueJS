import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import ShoppingCart from '../views/ShoppingCart.vue'


const routes = [
    { path: '/settings', component: HomePage},
    { path: '/cart', component: ShoppingCart},
    { path: '/login', component: LoginPage},
    { path: '/', name: 'anasayfa', component: HomePage},
    

];


const router = createRouter({
    routes,
    history: createWebHistory(""),
})


export default router;