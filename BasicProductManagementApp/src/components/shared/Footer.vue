<template>
    
<nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>Furkan Emre Dursun</strong>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Alış Tutarı : </strong>
        <span class="badge badge-danger">{{getBought}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Satış Tutarı : </strong>
        <span class="badge badge-success">{{getSold}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Bakiye : </strong>
        <span class="badge badge-primary">{{getBalance}}</span>
    </span>
</nav>

</template>


<script>
export default {
    computed:{
        getBought: function(){
            return this.$store.getters.getBought;
        },
        getSold: function(){
            return this.$store.getters.getSold;
        },
        getBalance: function(){
            return this.$store.getters.getSold - this.$store.getters.getBought;
        }
    }
}
</script>

<style>

</style>