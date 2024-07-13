import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/character",
  //per evitare che l'apiUrl originale venga sovrascritta durante le ricerche incrociate,faccio la ricerca su apiUrlActive e lascio invariata apiUrl
  apiUrlActive: "https://rickandmortyapi.com/api/character",
  characters: [],
  isLoad: false,
  charSearch: '',
  statusSearch: '',
  listStatus: [],
  next: '',
  prev: '',
});