<template>
  <div class="container">
    <header-vue></header-vue>
    <hr>
    <card-insert-vue></card-insert-vue>
    <br><br>
    <progress-bar-vue :count="products.length"></progress-bar-vue>
    <br><br>
    <h3 class="text-center">Added Products</h3>
    <hr>
    <div class="row product-container">
      <card-vue v-for="(productSelected, index) in products" :key="index" :product="productSelected"></card-vue>
    </div>

  </div>


</template>

<script>
import CardInsertVue from './components/card/cardInsert.vue';
import cardVue from './components/card/card.vue';
import headerVue from './components/shared/header.vue';
import progressBarVue from './components/shared/progressBar.vue';
import { eventBus } from './main';
  export default {
    components: {
      headerVue,
      progressBarVue,
      CardInsertVue,
      cardVue
    },
    data() {
      return {
        products: [],
      }
    },
    created() {
      eventBus.$on('addedProduct', (product) => {
        this.products = eventBus.productList;
      })
    },
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>

