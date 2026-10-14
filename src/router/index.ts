import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import BasicView from '@/views/BasicView.vue'
import AboutView from '@/views/AboutView.vue'

// 菜单读取这些路由的 meta.title；新增页面只需在此添加路由。
export const pages = [
  { path: 'home', component: HomeView, meta: { title: '概览' } },
  { path: 'basic', component: BasicView, meta: { title: '基础页面' } },
  { path: 'about', component: AboutView, meta: { title: '关于' } },
]

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: MainLayout, redirect: '/home', children: pages },
    { path: '/:pathMatch(.*)*', redirect: '/home' },
  ],
})
