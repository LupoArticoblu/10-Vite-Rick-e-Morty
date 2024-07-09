<template>
  <div class="container py-3 text-center">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: String,
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>