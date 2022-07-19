import ProductList from './components/ProductList.vue'
import ProductAdd  from './components/ProductAdd.vue'
import ProductDelete from './components/ProductDelete.vue'
import Loading from './components/shared/Loading.vue'

export const routes = [
    {path: '/', component: ProductList},
    {path: '/productAdd', component: ProductAdd},
    {path: '/productDelete', component: ProductDelete},
    {path: '/loading', component: Loading}
]