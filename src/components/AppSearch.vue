<template>
  <div class="container">
    <div class="row my-5 justify-content-center">
      <div class="col-auto">
        <input  type="text" v-model="store.charSearch" placeholder="Cerca un personaggio" class="form-control">
      </div>  
      <div class="col-auto">
        <select class="form-select" v-model="store.statusSearch">
          <!-- anche se selected, senza il value corrispondente alla stringa di statusSearch, il v-model rimane vuoto-->
          <option value="" selected>Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div class="col-auto">
        <button class="btn btn-primary">Search</button>
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>