<template>
  <div class="container">
    <div class="row" v-if="store.isLoad">
      <CarCard v-for="char in store.characters" 
      :key="char.id" 
      :char="char" />
    </div>
    <AppLoading v-else />
  </div>
</template>

<script>
import AppLoading from './Appload.vue';
import CarCard from './CarCard.vue';
import { store } from '../data/store';
export default {
  name: 'CharList',
  data() {
    return {
      store
    }
  },
  components: {
    CarCard,
    AppLoading
  }
}
</script>

<style lang="scss" scoped>

</style>