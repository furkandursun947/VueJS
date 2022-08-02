<template>
  <div class="mainApp_container">
    <LoadingComponent v-if="isLoading"/>
    <ToastComponent />
    <NavbarMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'
import LoadingComponent from './components/LoadingComponent.vue'
export default {
  data() {
    return {
      text: "selam"
    }
  },
  computed:{
    isLoading(){
      return this.$store.getters['sharedModule/getLoading'];
    }
  },
  components: {
    NavbarMenu,
    LoadingComponent,
},

}
</script>

<style>
.mainApp_container
{
  height: 100%;
}

</style>
