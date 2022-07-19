<template>
  <div class="container">
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Ürün Çıkışı</h3>
                <hr>
                <div v-if="productList.length != 0">
                    <div class="form-group">
                        <label>Ürün Adı</label>
                        <select class="form-control" v-on:change="elementChanged($event.target.value)" v-model="selectedElement">
                            <option value="default">Ürün Seçiniz..</option>
                            <option v-for="product in productList" :key="product.productName" :value="product.productName"> {{product.productName}} </option>
                        </select>
                    </div>
                    <div v-if="selectedProduct">
                        <div class="card mb-2 border border-danger">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <div class="mb-3">
                                            <span class="badge badge-info">Stok : {{selectedProduct.amount}}</span>
                                            <span class="badge badge-primary">Fiyat : {{selectedProduct.price}} TL</span>
                                        </div>
                                        <p class="border border-warning p-2 text-secondary">{{selectedProduct.text}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Adet</label>
                            <input type="number" class="form-control" placeholder="Ürün adetini giriniz.." v-model="amountToDelete">
                        </div>
                        <hr>
                        <button class="btn btn-primary" @click="deleteProductAmount">Kaydet</button>
                    </div>
                </div>
                <div class="alert alert-warning" v-else>
                    <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
                    <br>
                    <small>Kayıt Eklemek için <router-link to="/productAdd">Ürün İşlemleri</router-link> menüsünden yararlanabilirsiniz
                    </small>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
  export default {
    data: function(){
        return{
            selectedProduct: null,
            amountToDelete: null,
            selectedElement: "default",
        }
    },
    methods:{
        elementChanged: function(value){
            if(value != "default")
            {
                for(var i=0; i < this.productList.length; i++)
                {
                    if(this.productList[i].productName === value)
                    {
                        this.selectedProduct = this.productList[i];
                    }
                }
            } 
            else{
                this.selectedProduct = null;
            }
        },
        deleteProductAmount: function()
        {
            console.log(this.selectedProduct.amount);
            console.log(this.amountToDelete);
            if(!this.amountToDelete)
            {
                alert("Adet giriniz.")
                return;
            }
            
            if(this.amountToDelete > parseInt(this.selectedProduct.amount))
            {
                alert("Adet sayısı sahip olduğun ürün sayısını geçmemeli..");
                return;
            }

            var payload = {
                product: this.selectedProduct,
                amount: this.amountToDelete
            }
            this.$store.commit("setLoading", true);
            setTimeout(function() {
                this.$store.dispatch("deleteProductAction", payload);
            }, 1000)

            this.selectedProduct = null;
            this.selectedElement = "default";
        }
    },
    computed:{
      productList: function(){
        return this.$store.getters.getProducts;
      }
    },
    
  }
</script>
