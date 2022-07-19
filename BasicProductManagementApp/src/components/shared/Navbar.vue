<template>
    

    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
        <router-link to="/" exact exact-active-class="active">
            <a class="navbar-brand" style="color: #fff" >Ürün Listesi</a>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link to="/productAdd" exact active-class="active">
                        <a class="nav-link">Ürün İşlemleri</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/productDelete" exact active-class="active">
                        <a class="nav-link">Ürün Çıkışı</a>
                    </router-link>
            </li>
            </ul>
        </div>
    </nav>


</template>


<script>
export default {
    
}
</script>


<style scoped>
    
</style>