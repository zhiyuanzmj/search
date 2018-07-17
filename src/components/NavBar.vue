<template>
    <header class="d-flex flex-column justify-content-around flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white box-shadow">
        <h5 class="my-0 font-weight-normal"><img src="../assets/logo.png" class="mx-1" style="width:1.5rem"/>简搜</h5>
        <nav class="order-1 order-md-2 my-2 my-md-0">
            <router-link class="p-2 text-dark" to="/zmj">Features</router-link>
            <a class="p-2 text-dark" href="#">Enterprise</a>
            <a class="p-2 text-dark" href="#">login</a>
        </nav>
        <form class="order-2 order-md-1 form-inline">
            <input class="form-control search-query">
        </form>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .box-shadow{
        box-shadow:0 .25rem .75rem rgba(0,0,0,.05)
    }
    .search-query{
        background: 8px 5px url(../assets/search.svg) no-repeat;
        border-radius:1.5rem;
        padding-left: 2.5rem;
    }
</style>
