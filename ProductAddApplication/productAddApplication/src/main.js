import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data:function(){
    return{
      productList: []
    }
  },
  methods:{
    addProduct(product){
      if(this.productList.length >= 10)
      {
        alert("Maksimum 10 adet ürün ekleyebilirsiniz.");
        return;
      }
      this.$emit('addedProduct', product);
      this.productList.push(product);
    }
  }
})



new Vue({
  el: '#app',
  render: h => h(App)
})
