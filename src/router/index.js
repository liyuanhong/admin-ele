import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '../views/home/home_page'
import ShowPage1 from '../views/show/show_page_1'
import ShowPage2 from '../views/show/show_page_2'
import Login from '../views/login/login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/home/home_page",
    children: [
      {
        path: '/home/home_page',
        name: 'HomePage',
        component: HomePage
      }
    ]
  },
  {
    path: '/show',
    name: 'Show',
    component: Home,
    children: [
      {
        path: '/show/show_page_1',
        name: 'ShowPage1',
        component: ShowPage1
      },
      {
        path: '/show/show_page_2',
        name: 'ShowPage2',
        component: ShowPage2
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    redirect: '/login/login',
    children: [
      {
        path: '/login/login',
        name: 'LoginPage',
        component: Login
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
