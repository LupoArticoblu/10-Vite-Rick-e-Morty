<template>
  <div class="container">
    <div class="row" v-if="store.isLoad">
      <CarCard 
        v-for="char in store.characters" 
        :key="char.id" 
        :char="char" 
        @show-details="openModal" />
    </div>
    <AppLoading v-else />
    <Modal v-if="showModal" :char="selectedChar" @close="showModal = false" />
  </div>
</template>

<script>
import AppLoading from './Appload.vue';
import CarCard from './CarCard.vue';
import Modal from './Modal.vue';
import { store } from '../data/store';
export default {
  name: 'CharList',
  data() {
    return {
      store,
      showModal: false,
      selectedChar: null,
    }
  },
  components: {
    CarCard,
    AppLoading,
    Modal,
  },
  methods: {
    openModal(char) {
      this.selectedChar = char;
      this.showModal = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
