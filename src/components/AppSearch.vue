<template>
  <div class="container">
    <div class="row my-5 justify-content-center">
      <div class="col-auto">
        <input  type="text" v-model="store.charSearch" placeholder="Cerca un personaggio" class="form-control" @keyup.enter="$emit('startSearch')">
      </div>  
      <div class="col-auto">
        <select class="form-select" v-model="store.statusSearch">
          <!-- anche se selected, senza il value corrispondente alla stringa di statusSearch, il v-model rimane vuoto-->
          <option value="" selected>Status</option>
          <option v-for="(status, index) in store.listStatus" :key="index">{{ status }}</option>
        </select>
      </div>
      <div class="col-auto">
        <!-- inseriamo un $emit al click che richiamerà la funzione 'startSearch' dal figlio verso il padre-->
        <button @click="$emit('startSearch')" class="btn btn-primary">Search</button>
      </div>    
      <div class="col-auto">
        <button @click="reset()" class="btn btn-secondary">Reset</button>
      </div>    
    </div>
  </div>
</template>

<script>
import { store } from '../data/store';
export default {
  name: 'AppSearch',
  data() {
    return {
      store,

    }
  },
  methods: {
    reset() {
      store.charSearch = '';
      store.statusSearch = '';
      //al click del reset richiamiamo la funzione emit coi valori azzerati
      this.$emit('startSearch')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>