<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TheMultiselect/>
  </div>
</template>

<script>
import TheMultiselect from './components/TheMultiselect.vue'

export default {
  name: 'app',
  components: {
    TheMultiselect
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  h1, h2, h3, p {
    margin: 10px 0;
  }
  p {
    font-size: 16px;
  }
}
</style>
