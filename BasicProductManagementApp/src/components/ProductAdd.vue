<template>
  <div class="container">
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Ürün İşlemleri</h3>
                <hr>
                <div class="form-group">
                    <label>Ürün Adı</label>
                    <input type="text" class="form-control" placeholder="Ürün adını giriniz.." v-model="product.productName">
                </div>
                <div class="form-group">
                    <label>Adet</label>
                    <input type="text" class="form-control" placeholder="Ürün adetini giriniz.." v-model="product.amount">
                </div>
                <div class="form-group">
                    <label>Fiyat</label>
                    <input type="text" class="form-control" placeholder="Ürün fiyatı giriniz.." v-model="product.price">
                </div>
                <div class="form-group">
                    <label>Açıklama</label>
                    <textarea cols="30" rows="5" placeholder="Ürüne ait bir açıklama giriniz..."
                              class="form-control" v-model="product.text"></textarea>
                </div>
                <hr>
                <button class="btn btn-primary" @click="addProduct">Kaydet</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
  export default {
    data: function(){
        return{
            product: {
                id: 1,
                productName: null,
                amount: null,
                price: null,
                text: null,
            }
        }
    },
    methods:{
        resetProduct: function(){
            this.product = {
                id: 1,
                productName: null,
                amount: null,
                price: null,
                text: null,
            };
        },
        addProduct: function(){
            console.log(this.product);
            this.$store.commit("setLoading", true);
            setTimeout(function(){
                this.$store.dispatch("addProductAction", this.product);
                this.resetProduct();
                this.$router.push("/");
                this.$store.commit("setLoading", false);
            }, 1000)
            
        },
        
    }
  }
</script>
