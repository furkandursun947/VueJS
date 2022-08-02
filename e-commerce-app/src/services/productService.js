import api from '../axios/api'


export default  {



    async getProducts()
    {
        // let where;
        // if(limit) where=limit
        // else where= ''
        
        let response = await api.get('/products', {

        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("hey",err)
            return null;
        })

        return response;
    },

    async addProduct(product, userId)
    {
        debugger; //eslint-disable-line
        let response = await api.post('/carts', {
            userId: userId,
            product: product
        }).then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("heyy", err);
            return null;
        })

        return response;

    },

    async getCartProducts(userId)
    {
        let response = await api.get(`/carts/user/${userId}`)
        .then((res) => {
            return res.data;
        }).catch((err) => {
            console.log("heyy", err);
            return null;
        })

        return response;

    }



}



