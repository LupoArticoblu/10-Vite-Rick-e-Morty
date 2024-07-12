<template>
  <div class="container">
    <p class="text-center py-3">Personaggi visualizzati in pagina: {{ store.characters.length }}</p>
  </div>
</template>

<script>
import { store } from '../data/store';
export default {
  name: 'Results',
  data() {
    return {
      store
    }
  }
}
</script>

<style>

</style>