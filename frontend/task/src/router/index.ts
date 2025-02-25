import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../view/Home.vue')
  },
  {
    path: '/rooms',
    name: 'RoomList',
    component: ()=> import('../view/RoomList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 