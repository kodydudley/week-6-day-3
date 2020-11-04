import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../pages/Home.vue'
import Car from '../pages/CarsPage.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/cars',
  name: 'Car',
  component: Car
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
