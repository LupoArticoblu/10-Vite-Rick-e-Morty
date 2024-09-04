<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">X</button>
      <img :src="char.image" :alt="char.name" class="modal-image"/>
      <h2>{{ char.name }}</h2>
      <p>Status: {{ char.status }}</p>
      <p>Species: {{ char.species }}</p>
      <p>Gender: {{ char.gender }}</p>
      <!-- Aggiungi altri dettagli se necessario -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    char: {
      type: Object,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: red;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button:hover {
  background-color: darkred;
}

.modal-image {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>
