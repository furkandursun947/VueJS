<template>
    <div class="cardContainer">
        <div class="titleContainer">
            <span class="title_card">{{product.title}}</span>
        </div>
        <div class="imageContainer">
            <img :src="product.image" alt="imageField"/>
        </div>
        <div class="detailContainer">
            <div class="descContainer">
                <div class="descriptionContainer">
                    <span class="descCard">{{getDesc}}</span>
                    <div class="moreButton">
                        <ButtonComponent label="More" icon="pi pi-external-link" class="p-button-outlined" @click="display=true"/>
                    </div>
                    <DialogComponent v-model:visible="display">
                        <template #header>
                            <h3>{{product.title}}</h3>
                        </template>

                        {{product.description}}
                    </DialogComponent>
                </div>
                <div class="ratePriceContainer">
                    <div class="rateContainer">
                        <span class="rateTitle">Rate: </span>
                        <span class="rate_rate">{{product.rating.rate}} </span>
                        <span class="rate_count">/ {{product.rating.count}} Voting</span>
                    </div>
                    <div class="priceContainer">
                        <span class="priceTitle">Price: </span>
                        <span class="price_price">{{product.price}}$</span>
                    </div>
                </div>
                <div class="cartAddContainer">
                    <ButtonComponent class="addButton p-button-text p-button-text p-button-help" :label="buttonField.label" :icon="getIcon" @click="addCart" :disabled="buttonField.disabled"/>
                </div>
            </div>
        </div>
    </div>   
</template>

<script>
import productService from '../services/productService';
export default {
    props: {
        product: Object
    },
    data() {
        return {
            display: false,
            buttonField: {
                label: 'Add to Cart',
                icon: 'pi pi-shopping-cart',
                loading: false,
                loadingIcon: 'pi pi-spin pi-spinner',
                disabled: false
            }
        }
    },
    created() {
        console.log("selam created")
    },
    computed:{
        getDesc(){
            return this.product.description.substr(0,30) + "...";
        },
        getIcon(){
            return this.buttonField.loading ? this.buttonField.loadingIcon:this.buttonField.icon;
        }
    },
    methods: {
        addCart(){
            this.buttonField.loading = true;
            this.buttonField.disabled = true;
            this.buttonField.label = 'Adding...';
            debugger; //eslint-disable-line
            console.log(this.$store.getters['userModule/getUserId'])
            productService.addProduct(this.product, this.$store.getters['userModule/getUserId']).then((res) => {
                if(res) this.$toast.add({ severity: 'success', summary: 'Success', detail: 'The product is added successfully. (The database will not be updated since the api is FakeStoreAPI.)', life: 3000 })
                else this.$toast.add({ severity: 'error', summary: 'Error', detail: 'An Error occurred while adding the product.', life: 3000 })
            })
        }
    },
}
</script>


<style scoped>


.cardContainer{
    display: inline-block;
    margin: 20px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 5px 3px rgba(45,107,88,1);
    -moz-box-shadow: 0px 0px 5px 3px rgba(45,107,88,1);
    box-shadow: 0px 0px 5px 3px rgba(45,107,88,1);
    border-radius: 5px;
    height: 600px;
    min-width: 400px;
    width: 400px;
}


.imageContainer{
    width: inherit;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px;
    -webkit-box-shadow: 0px 10px 28px 21px rgba(248, 249, 250, 0.9);
    -moz-box-shadow: 0px 10px 28px 21px rgba(248, 249, 250, 0.9);
    box-shadow: 0px 10px 28px 21px rgba(248, 249, 250, 0.9);
}

.imageContainer img{
    width: 200px;
    height: 200px;
}

.detailContainer{
    width: inherit;
    height: 237px;
}

.titleContainer{
    height: 50px;
    width: inherit;
    padding: 10x;
    margin-bottom: 15px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
}

.descContainer{
    height: 150px;
    width: inherit;
}

.descriptionContainer{
    display: inline-block;
    height: 150px;
    width: 50%;
    overflow: hidden;
    padding:20px;
}

.ratePriceContainer{
    display: inline-block;
    height: 150px;
    width: 50%;

}

.ratePriceContainer{
    overflow: hidden;
    padding: 20px;
}

.priceContainer{
    margin-top: 25px;
}

.descCard{
    word-wrap: break-word;
    overflow: hidden;
    display: block;
}

.moreButton{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
}
.moreButton button{
    width: 100%;
}

.rateTitle, .priceTitle{
    font-size: 15px;
    font-weight: bold;
}

.rate_rate{
    margin-left: 3px;
    color: rgb(2, 135, 24);
    font-size: 22px;
}

.price_price{
    margin-left: 3px;
    color: rgb(169, 40, 40);
    font-size: 22px;
}

.rate_count{
    margin-left: 5px;
    color: rgb(67, 63, 63);
    font-size: 15px
}

.cartAddContainer{
    width: 100%;
    display: flex;
    justify-content: center;
}

.addButton{
    width: 200px;
}

</style>