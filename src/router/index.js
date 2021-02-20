import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CodeDoorView from '@/views/CodeDoorView'
import CodeDoor from '@/components/CodeDoor'
import CodeDoorGreetings from '@/components/CodeDoorGreetings'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/code',
    name: 'Code',
    component: CodeDoorView,
    children: [
      {
        path: '',
        name: 'CodeDoor',
        component: CodeDoor
      },
      {
        path: 'greetings',
        name: 'CodeDoorGreetings',
        component: CodeDoorGreetings
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
