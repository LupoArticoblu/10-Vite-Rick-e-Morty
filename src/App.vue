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
      //siccome store è importato come elemento globale, posso accedervi senza this
      axios.get(store.apiUrl)
      .then((res) => {
        store.characters = res.data
        console.log(store.characters);
      })
      .catch((err) => {
        console.log(err);
      })
    },
  },
}
</script>

<style lang="scss">
 @use './styles/General.scss';
</style>
