import {createStore} from "vuex";
import productModule from "./modules/product/product";
import userModule from "./modules/user/user";
import sharedModule from "./modules/shared/shared";


export const store = createStore({
  modules : {
    productModule,
    userModule,
    sharedModule
  },
  
});
