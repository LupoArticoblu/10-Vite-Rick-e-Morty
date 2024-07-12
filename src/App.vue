<template>
    <AppHeader :title="'Rick & Morty'" />
    
    <main>
      <AppSearch/>
      <CharList/>
    </main>
</template>

<script>
//importiamo axios per le chiamate api
import axios from 'axios';
import {store} from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CharList from './components/CharList.vue';
export default {
  name: 'App',
  data() {
    return {
      store
    } 
  },
  components: {
    AppHeader,
    AppSearch,
    CharList
  },
  mounted() {
    this.getChars();
  },
  methods: {
    getChars() {
      //ogni volta che parte la ricerca il load dev essere false
      store.isLoad = false
      //siccome store è importato come elemento globale, posso accedervi senza this
      
      
      //filtriamo la chiamata all'api per ottenere i risultati della nostra ricerca: ho 2 modi per farlo: 1) passare in 'axios.get' la stringa di ricerca,(store.apiUrl.'?name='+ store.charSearch) 2) passare in 'axios.get' un oggetto con la chiave 'params' con il valore di 'store.charSearch', la seconda è l'opzione migliore, sempre.
      axios.get(store.apiUrl, {
        params: {
          name: store.charSearch,
          status: store.statusSearch
        }
      })
      .then((res) => {
        store.characters = res.data.results
        //al termine della ricerca, il load è true
        store.isLoad = true
      })
      .catch((err) => {
        console.log(err);
      })
    },
  },
  //watch ti permette di vedere i cambiamenti in corso e se il tuo componente in quel momento sia reattivo o meno
  watch: {
    //prende il valore nel v-model e ci fa una funzione passando 2 parametri (newVal, oldVal)
  'store.charSearch': function(newVal, oldVal) {
    // in console vediamo come si sostituisce oldVal con newVal
    console.log('charSearch changed from', oldVal, 'to', newVal);
    }
  }
}
</script>

<style lang="scss">
 @use './styles/General.scss';
</style>
