<template>
    <div class="loginContainer">
        <div class="loginCard">
            <div class="loginHeader">
                <h3>Login</h3>
            </div>
            <div class="loginBody">
                <form @submit="formSubmitted($event)" style="width: 100%">
                    <div class="field_login">
                        <label name="username">Username: </label>
                        <input type="text" autocomplete required v-model="username" />
                    </div>
                    <div class="field_login">
                        <label name="password">Password: </label>
                        <input type="password" autocomplete required v-model="password" />
                    </div>
                    <div class="field_login">
                        <ButtonComponent type="submit">Login</ButtonComponent>
                    </div>
                    <div class="field_login">
                        <ButtonComponent class="p-button-help" @click="display = true">Click me for user informations
                        </ButtonComponent>
                        <DialogComponent modal v-model:visible="display">
                            <template #header>
                                <h3>User Informations</h3>
                            </template>

                            In this application, Fake Store API is used. So users are set statically. For further
                            informations:
                            <a href="https://fakestoreapi.com/">Fake Store API</a>
                            <br />
                            Example user;
                            <br />
                            <b>Username: </b> mor_2314
                            <br />
                            <b>Password: </b> 83r5^_
                        </DialogComponent>
                    </div>
                </form>


            </div>


        </div>

    </div>
</template>

<script>
import menuService from '@/services/menuService';
import api from '../axios/api';
import userService from '../services/userService';
export default {
    data() {
        return {
            username: null,
            password: null,
            display: false,
        }
    },
    methods: {
        formSubmitted(e) {
            this.$store.dispatch('sharedModule/SET_LOADING', true);
            e.preventDefault();
            api.post('/auth/login', {
                username: this.username,
                password: this.password
            })
                .then((res) => {
                    console.log(res)
                    this.$store.dispatch('sharedModule/SET_LOADING', false);
                    debugger; // eslint-disable-line
                    userService.getSingleUser(this.username).then((response) => {
                        if(response){
                            this.$store.dispatch('userModule/SET_USER', response);              
                            this.$store.dispatch('userModule/SET_ISLOGGED', true); 
                            menuService.setShowCart(true)             
                            menuService.setShowLogin(false)             
                            menuService.setShowProfile(true)             
                        }
                    })
                    this.$router.push('/');
                    this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Successfully logged in.', life: 3000 })
                })
                .catch((err) => {
                    console.log(err)
                    this.$store.dispatch('sharedModule/SET_LOADING', false);
                    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Username or password is incorrect', life: 3000 })
                })
        }
    },
    computed: {

    }
}
</script>


<style scoped>
.loginContainer {
    width: 100%;
    height: 50%;
    justify-content: center;
    display: flex;
    margin-top: 30px;
}

.loginCard {
    width: 400px;
    -webkit-box-shadow: 0px 10px 28px 21px rgba(248, 249, 250, 0.8);
    -moz-box-shadow: 0px 10px 28px 21px rgba(248, 249, 250, 0.8);
    box-shadow: 0px 10px 28px 21px rgba(248, 249, 250, 0.8);
    border-radius: 5px;

}

.loginHeader {
    padding: 20px;
    letter-spacing: 3px;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(248, 249, 250, 0.8);
    text-align: center;

}

.loginBody {
    display: flex;
    justify-content: center;
}

.field_login {
    padding: 20px;
    width: 100%;
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-top: 10px;
}
</style>