<template>
  <div id="app">
    <Menu />
    <hr/>
    <router-view></router-view>
    <hr/>
    <HolaGente/>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import HolaGente from './components/HolaGente.vue'
import Menu from './components/navegacion/Menu.vue'

export default {
  name: 'App',
  components: {
    HolaGente,
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
