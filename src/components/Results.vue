<template>
  <div class="container">
    <p class="text-center py-3"> {{ outputResults }}</p>
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
  },
  //LE COMPUTED sono metodi che vengono richiamati solo e soltanto quando un dato reattivo all'interno di esse cambia, senza la necessita di ricaricare la pagina e tutti i suoi contenuti
  computed: {
    outputResults() {
      if (store.characters.length > 0) {
        return 'Personaggi trovati: ' + store.characters.length;
      }
      //il return è obbligatorio
      return 'Nessun personaggio trovato';
    }
  }
}
</script>

<style>

</style>