<template>
  <div id="app">
    <Loading v-if="isLoading"></Loading>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/shared/Footer.vue";
import Navbar from "./components/shared/Navbar.vue";
import Loading from "./components/shared/Loading.vue";
export default {
    computed:{
      isLoading: function(){
        return this.$store.getters.getLoading;
      }
    }, 
    components: { Footer, Navbar, Loading }
}
</script>

<style>


</style>
