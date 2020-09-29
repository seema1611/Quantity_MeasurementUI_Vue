<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
