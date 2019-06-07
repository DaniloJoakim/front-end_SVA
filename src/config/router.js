import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import Auth from '@/features/auth/main'
import UserAdmin from '@/components/admin/UserAdmin'
import CategoryAdmin from '@/components/admin/CategoryAdmin'
import ArticlePages from '@/components/admin/ArticleAdmin'


Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
},{
    name: 'auth',
    path: '/auth',
    component: Auth
},{
    name: 'competencias',
    path: '/competencias/minhas',
    component: UserAdmin
},{
    name: 'vagas',
    path: '/vagas/minhas',
    component: CategoryAdmin
},{
    name: 'perfil',
    path: '/perfil',
    component: ArticlePages
}]

export default new VueRouter({
    mode: 'history',
    routes: routes
})
