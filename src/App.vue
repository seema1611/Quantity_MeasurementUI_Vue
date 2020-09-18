<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  }

  ,components:{Home}
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
