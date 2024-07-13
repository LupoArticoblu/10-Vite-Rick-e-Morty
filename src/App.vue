<template>
    <AppHeader :title="'Rick&Mortypedia '" />
    
    <main>
      <AppSearch @startSearch="startSearch()" />
      <CharList/>
    </main>
    <div class="container py-3 text-center d-flex justify-content-around">
      <button v-if="store.prev" class="btn btn-warning" @click="goToPage('prev')"><a href="#"><< precedente</a></button>
      <button v-if="store.next" class="btn btn-warning" @click="goToPage('next')"><a href="#">successiva >></a></button>
    </div>
    <Results/>
</template>

<script>
//importiamo axios per le chiamate api
import axios from 'axios';
import {store} from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppSearch from './components/AppSearch.vue';
import CharList from './components/CharList.vue';
import Results from './components/Results.vue';
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
    CharList,
    Results
  },
  mounted() {
    this.getChars();
  },
  methods: {
    startSearch(){
      store.apiUrlActive = store.apiUrl;
      this.getChars();
    },
    goToPage(direction) {
      //il metodo 'goToPage' è un metodo generico per andare alla pagina successiva o alla precedente, passando come parametro 'next' o 'prev'
      store.apiUrlActive = store[direction];
      this.getChars();
    },
    getChars() {
      //ogni volta che parte la ricerca il load dev essere false
      store.isLoad = false
      //siccome store è importato come elemento globale, posso accedervi senza this
      
      
      //filtriamo la chiamata all'api per ottenere i risultati della nostra ricerca: ho 2 modi per farlo: 1) passare in 'axios.get' la stringa di ricerca,(store.apiUrl.'?name='+ store.charSearch) 2) passare in 'axios.get' un oggetto con la chiave 'params' con il valore di 'store.charSearch', la seconda è l'opzione migliore, sempre.
      axios.get(store.apiUrlActive, {
        params: {
          name: store.charSearch,
          status: store.statusSearch
        }
      })
      .then((res) => {
        store.characters = res.data.results;
        //salvo le info per la paginazione
        store.next = res.data.info.next;
        store.prev = res.data.info.prev;
        //solo alla prima chiamata API salvo gli status presenti
        if (store.listStatus.length === 0) {
          store.characters.forEach((char) => {
            //se lo status non è presente lo pusho nella lista globale degli status
           if (!store.listStatus.includes(char.status)) {
            store.listStatus.push(char.status)
           } 
          })
        }
        //al termine della ricerca, il load è true
        store.isLoad = true
      })
      .catch((err) => {
        console.log(err);
        store.isLoad = true;
        store.characters = [];
        store.charSearch = '';
        store.statusSearch = '';
        store.next = null;
        store.prev = null;
        store.listStatus = [];
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
