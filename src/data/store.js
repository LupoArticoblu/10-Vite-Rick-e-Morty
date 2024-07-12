import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://rickandmortyapi.com/api/character",
  characters: [],
  isLoad: false,
  charSearch: '',
  statusSearch: '',
});