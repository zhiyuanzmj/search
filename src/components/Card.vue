<template>
    <div class="card flex-row box-shadow" style="width:auto">
        <img class="card-img-top ml-1" style="width:100px;height:100px" :src="img">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        img_type:{
            type:String,
            default:'default',
        },
        title:{
            type:String,
            default:'无标题',
            required:true,
        },
        text:{
            type:String,
            default:'这个逼很懒啥都没写'
        }
    },
    data:function(){
        return{
            img:'',
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
