import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'PostList', component: () => import('@/views/PostList') },
  {
    path: '/create-post',
    name: 'CreatePost',
    component: () => import('@/views/CreatePost'),
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('@/views/Post'),
    props: true,
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/Users'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
