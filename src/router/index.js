import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../pages/Home.vue'
import Cars from '../pages/CarsPage.vue'
import ActiveCar from '../pages/ActiveCarPage.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/cars',
  name: 'Cars',
  component: Cars
},
{
  path: '/cars/:carId',
  name: 'ActiveCar',
  component: ActiveCar
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
