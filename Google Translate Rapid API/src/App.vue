<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    components: { Home }
}
</script>

<style>

</style>
