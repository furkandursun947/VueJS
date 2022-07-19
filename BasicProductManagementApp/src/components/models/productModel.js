


class Product{
    constructor(id, productName, amount, price, text){
        this.id = id || 1;
        this.productName = productName || 'example';
        this.amount = amount || 'example';
        this.price = price || 'example';
        this.text = text || 'no text was given';
    }
}

export default Product;