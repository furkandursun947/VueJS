import Vue from "vue"
import Vuex from "vuex";
import Product from "../components/models/productModel";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [],
        loading: false,
        bought: 0,
        sold: 0,
    },
    getters: {
        getProducts(state)
        {
            return state.products;
        },
        getLoading(state)
        {
            return state.loading;
        },
        getBought(state)
        {
            return state.bought;
        },
        getSold(state)
        {
            return state.sold;
        },
    },
    mutations: {
        addProductMethod(state, payload)
        {
            var newProduct = new Product(1, payload.productName, payload.amount, payload.price, payload.text)
            state.products.push(newProduct);
            state.bought += parseInt(payload.price) * parseInt(payload.amount);
        },
        setLoading(state, payload)
        {
            state.loading = payload;
        },
        deleteProductMethod(state, payload)
        {
            var newArr = [];
            for(let i=0; i<state.products.length; i++)
            {
                if(state.products[i].productName == payload.product.productName)
                {
                    state.sold += payload.amount * parseInt(payload.product.price);
                    if(payload.amount < parseInt(state.products[i].amount))
                    {
                        state.products[i].amount -= payload.amount;
                        newArr.push(state.products[i]);
                    }   
                }
                else{
                    newArr.push(state.products[i]);
                }
            }
            state.products = newArr;
            state.loading = false;
        }
    },
    actions: {
        addProductAction({commit}, payload)
        {
            commit("addProductMethod", payload);
        },
        deleteProductAction({commit}, payload)
        {
            commit("deleteProductMethod", payload);
        }
    }
})