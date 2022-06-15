<template>
    <div class="col-md-2 card">
        <img class="card-img-top" :src="product.selectedImage" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Product</h5>
            <small>
            <strong>Name : </strong> {{product.productName}}
            </small>
            <br>
            <small>
            <strong>Price : </strong> {{product.productPrice}}
            </small>
            <br>
            <small>
            <strong>Amount : </strong> {{product.productAmount}}
            </small>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        product: {}
    },
}
</script>