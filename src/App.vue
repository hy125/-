<template>
  <div id="app">
    <app-header></app-header>
   <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/common/header/Header.vue";
import Home from "./components/pages/home/Home.vue";
export default {
  name: 'App',
  components: {
    AppHeader,
    Home
  }
}
</script>

<style>

</style>
