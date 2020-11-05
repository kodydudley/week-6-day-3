import { api } from './AxiosService'
import { AppState } from '../AppState'
import router from '../router'
// import router from '../router'

class CarsService {
  async getAllCars() {
    try {
      const res = await api.get('/cars')
      AppState.cars = res.data.data
      console.log(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  async postCar(carData) {
    try {
      const res = await api.post('/cars', carData)
      this.getAllCars()
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  async removeCar(carId) {
    try {
      await api.delete('/cars/' + carId)
      router.push({ name: 'Cars' })
    } catch (error) {
      console.error(error)
    }
  }

  async getActiveCar(carId) {
    try {
      const res = await api.get('/cars/' + carId)
      AppState.activeCar = res.data.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const carsService = new CarsService()
