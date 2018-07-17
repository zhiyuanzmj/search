<template>
<div class="container">
    <header>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    <slot name='cnm'>cnmb</slot>
</div>
</template>
<script>
export default {
    name:'BaseLayout'
    ,data(){
        return {
        }
    }
    ,props:{
    }
    ,methods:{
    }
}
</script>
