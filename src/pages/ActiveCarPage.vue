<template>
  <div class="container-fluid">
    <div class="ActiveCarPage">
      <div class="row text-center">
        <div class="col-6 offset-3">
          <h1>{{ car.make }} {{ car.model }}</h1>
          <img :src="car.imgUrl" alt="" srcset="" class="img-fluid">
          <h2>{{ car.price }}</h2>
          <p>{{ car.description }}</p>
          <button class="btn btn-danger btn-block" @click="removeCar">
            Delete Car
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
import { computed, onMounted } from 'vue'

export default {
  name: 'ActiveCarPage',
  setup() {
    const route = useRoute()
    onMounted(() =>
      carsService.getActiveCar(route.params.carId))
    return {
      car: computed(() => AppState.activeCar),
      removeCar() {
        carsService.removeCar(route.params.carId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
