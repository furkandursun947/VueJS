import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { store } from "./store/store";
import './main.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import Button from 'primevue/button'
import TabMenu from 'primevue/tabmenu';
import Badge from 'primevue/badge';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';

const app = createApp(App).use(router).use(store)


app.use(PrimeVue)







app.component('ButtonComponent', Button);
app.component('TabMenuComponent', TabMenu);
app.component('BadgeComponent', Badge);
app.component('PasswordComponent', Password);
app.component('InputComponent', InputText);
app.component('ToastComponent', Toast);
app.component('DialogComponent', Dialog);
app.use(ToastService);



app.mount('#app');
if(!this.$store.getters['userModule/getUserId'])
{
    this.$router.push('/login');
}