<template>
  <div class="certocard col-3">
    <img :src="char.image" :alt="char.name">
    <h4>{{ char.name }}</h4>
    <p>{{ char.status }}</p>
    <p>{{ char.species }}</p>
  </div>
</template>

<script>
export default {
  name: 'CarCard',
  props: {
    char: Object
  }
}
</script>

<style lang="scss" scoped>
  @use '../styles/partials/var' as *;
  .certocard{
    text-align: center;
    margin: 0 0 40px 0;
    img{
      border-radius: 50%;
      max-width: 100%;
      box-shadow: 0 0 5px 3px rgba(#000000, .12);
      transition: all .2s;
      margin: 0 0 10px 0;
      &:hover{
       transform: scale(1.05);
      }
    }
    h4{
      &::after{
        content: '';
        display: block;
        border-bottom: 1px solid $primary-color;
        width: 50px;
        margin: 10px auto;
      }
      margin: 10px 0 0 0;
    }
  }
</style>