<template>
  <div class="car-component col-3 card">
    <h3>
      {{ carProp.make }} {{ carProp.model }}
    </h3>
    <router-link :to="{name:'ActiveCar', params:{carId: carProp._id}}">
      <img :src="carProp.imgUrl" alt="" srcset="" class="img-fluid">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CarComponent',
  props: ['carProp'],
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
