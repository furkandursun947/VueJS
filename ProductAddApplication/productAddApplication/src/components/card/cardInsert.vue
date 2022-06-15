<template>
    <div class="row">
      <div class="card offset-2 col-md-3">
        <div class="card-body tex-center d-flex align-items-center flex-column">
          <img height="128" class="img-responsive text-center mb-3"
               :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage">
          <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
          <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Upload an Image</button>
        </div>
      </div>
      <div class="col-md-5">
        <div class="col-md-11 card">
          <div class="card-body">
            <div class="form-group">
              <label>Product Name</label>
              <input type="text" class="form-control" placeholder="name of your product" v-model="product.productName">
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label>Product Amount</label>
                <input type="text" class="form-control" placeholder="insert the amount" v-model="product.productAmount">
              </div>
              <div class="form-group col-md-6">
                <label>Product Price</label>
                <input type="text" class="form-control" placeholder="price" v-model="product.productPrice">
              </div>
            </div>
            <button class="btn btn-outline-info btn-block" @click="addProduct">Add!</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
    data() {
      return {
        imageList: [],
        product : {
            productAmount: 0,
            selectedImage: null,
            productName: '',
            productPrice: 0
        }
      }
    },
    methods: {
      onChange(e) {
        const file = e.target.files[0];
        this.product.selectedImage = URL.createObjectURL(file);
      },
      addProduct(){
        eventBus.addProduct(this.product);
        this.product = {
            productAmount: 0,
            selectedImage: null,
            productName: '',
            productPrice: 0
        };
      }
    }
}
</script>