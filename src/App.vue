<template>
  <div id="app">
    <canvas></canvas>
  </div>
</template>

<script>
  import axios from 'axios'
  import socketProvider from './utils/socketProvider'
  export default {
    name: 'app',
    mounted () {
      axios.get('api/welcome').then(data => console.log(data))
    }
  }
</script>

<style lang="scss">
</style>
