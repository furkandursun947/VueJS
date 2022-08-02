<template>
    <div class="navContainer">
        <ul class="navList">
            <router-link class="navElement" to="/">
                <li  class="navItem"><i class="pi pi-fw pi-home"></i><a style="text-decoration: none;">Home</a></li>
            </router-link>
            <router-link class="navElement"  to="/cart" v-if="showCart">
                 <li  class="navItem"><i class="pi pi-fw pi-shopping-cart"></i><a style="text-decoration: none;">Cart</a></li>
            </router-link>
            <router-link class="navElement"  to="/login" v-if="showLogin">
                 <li  class="navItem navRight"><i class="pi pi-fw pi-sign-in"></i><a style="text-decoration: none;">Login</a></li>
            </router-link>
            <router-link class="navElement"  to="/profile" v-if="showProfile">
                 <li  class="navItem navRight"><i class="pi pi-fw pi-user"></i><a style="text-decoration: none;">Profile</a></li>
            </router-link>
        </ul>
    </div>
</template>



<script>
import menuService from '@/services/menuService'
export default {
    data() {
        return {

        }
    },
    computed:{
        isLogged(){
            return this.$store.getters['userModule/getIsLogged']
        },
        
    },
    watch:{
        showCart(old, newV){
            console.log("heyyyyyyyyyyyyyy")
            console.log(old, newV)
            return menuService.showCart;
        },
        showProfile(old, newV){
            console.log(old, newV)
            return menuService.showProfile;
        },
        showLogin(old, newV){
            console.log(old, newV)
            return menuService.showLogin;
        }
    },
    created() {
        console.log(this.$store.getters['userModule/getIsLogged'])
    },

}
</script>


<style>

.navContainer{
    width: 100%;
    margin: 0px 0px 20px 0px;
    -webkit-box-shadow: 0px 45px 8px -37px rgba(46,46,46,0.12);
-moz-box-shadow: 0px 45px 8px -37px rgba(46,46,46,0.12);
box-shadow: 0px 45px 8px -37px rgba(46,46,46,0.12);
}

.navElement{
    text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  overflow: hidden;
}

.navRight{
    float: right;
}

.navItem{
    padding: 20px;
}

li {
  float: left;
  color: rgb(67, 63, 63);

}

li:hover{
    background-color: aliceblue;
    transition: 0.5s;
    cursor: pointer;

}

.router-link-active.router-link-exact-active li{
    color: red;
}

@media screen and (max-width: 600px) {
  ul .navRight, 
  ul li {float: none;}
}

</style>