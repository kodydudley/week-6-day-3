<template>
  <div class="container-fluid">
    <div class="CarsPage">
      <h1 class="mt-3">
        Cars
      </h1>
      <form class="form-group col-10 offset-1" @submit.prevent="postCar">
        <input type="text"
               class="form-control mb-2"
               name=""
               id=""
               aria-describedby="helpId"
               placeholder="Make"
               v-model="state.newCar.make"
        >
        <input type="text"
               class="form-control mb-2"
               name=""
               id=""
               aria-describedby="helpId"
               placeholder="Model"
               v-model="state.newCar.model"
        >
        <input type="text"
               class="form-control mb-2"
               name=""
               id=""
               aria-describedby="helpId"
               placeholder="Image URL"
               v-model="state.newCar.imgUrl"
        >
        <input type="number"
               class="form-control mb-2"
               name=""
               id=""
               aria-describedby="helpId"
               placeholder="Year"
               v-model="state.newCar.year"
        >
        <input type="number"
               class="form-control mb-2"
               name=""
               id=""
               aria-describedby="helpId"
               placeholder="Price"
               v-model="state.newCar.price"
        >
        <input type="text"
               class="form-control mb-2"
               name=""
               id=""
               aria-describedby="helpId"
               placeholder="Description"
               v-model="state.newCar.description"
        >
        <button type="submit" class="btn btn-primary col-6">
          Post
        </button>
      </form>
      <div class="row">
        <car-component v-for="car in cars" :key="car._id" :car-prop="car" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
import carComponent from '../components/CarComponents'

export default {
  name: 'CarsPage',
  setup() {
    const state = reactive({
      newCar: {}
    })
    onMounted(() => {
      carsService.getAllCars()
    })
    return {
      state,
      cars: computed(() => AppState.cars),
      postCar() {
        carsService.postCar(state.newCar)
      }
    }
  },
  components: { carComponent }
}
</script>

<style lang="scss" scoped>

</style>
