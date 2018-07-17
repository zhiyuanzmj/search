<template>
    <main class="container">
        <div class="card flex-row box-shadow" style="width:auto">
            <img class="card-img-top ml-2" style="width:100px;height:100px" :src="img">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">some thing</p>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data:function(){
        return{
            img:'',
            img_type:'default',
        }
    }
    ,computed:{
        img1(){
            return this.$store.state.count
        }
    }

    ,created:function(){
        import(`@/assets/${this.img_type}.svg`).then(result=>{
          this.img=result.default
        })
    }
}
</script>

<style>

</style>
