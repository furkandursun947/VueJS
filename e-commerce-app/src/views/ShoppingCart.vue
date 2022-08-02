<template>
    <div class="homepage_container">
        <ProductCard v-for="product in products" :type="cart" :key="product.id" :product='product'></ProductCard>
    </div>
</template>


<script>
import ProductCard from '@/components/ProductCard.vue'
import ProductService from '../services/productService'

export default {
    data() {
        return {
            products : [],
            currentPage:1
        };
    },
    computed: {},
    created() {
        debugger; // eslint-disable-line
        this.$store.dispatch('sharedModule/SET_LOADING', true);
        ProductService.getCartProducts(this.$store.getters['userModule/getUserId']).then((res) => {
            if(res){
                this.products = res.data;
            }
            else this.$toast.add({ severity: 'error', summary: 'Error', detail: 'An Error occurred while fetching the products.', life: 3000 })
        }).then(() => { this.$store.dispatch('sharedModule/SET_LOADING', false)});
        

    },
    methods: {
        
    },
    components: { ProductCard }
}
</script>



<style scoped>
.homepage_container
{
}
</style>