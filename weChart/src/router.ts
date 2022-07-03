import { createRouter, createWebHistory } from "vue-router";
// import login from '@pages/login/index.vue'
// 创建路由

const Login = () => import('@views/login/login.vue')

console.log(Login);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    // redirect: '/test'
  }
]
export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})