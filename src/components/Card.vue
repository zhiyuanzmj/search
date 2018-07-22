<template>
    <div class="card flex-row box-shadow mb-3" style="border">
        <img class="card-img-top m-1" :style="img_style" :src="img">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <div class='btn-group card-text'>
                <a class="btn btn-outline-light" v-for="c in count" style="color:black" href="#" :key="c.value">{{c.value}}</a>
            </div>
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
        },
        count:Array
    },
    data:function(){
        return{
            img:'s',
            img_height:'100px',
            img_style:{
                width:'auto',
                height:'6.25rem'
            }
        }
    }
    ,computed:{
        img1(){
            return this.$store.state.count
        }
    },
    watch:{
        img_type:function(){
            import(`@/assets/${this.img_type}.svg`).then(result=>{
              this.img=result.default
            })
        }
    }
    ,mounted:function(){
        this.img_style.height=this.$el.clientHeight+'px'
        import(`@/assets/${this.img_type}.svg`).then(result=>{
          this.img=result.default
        })
    }
}
</script>

<style>
    .box-shadow{
        box-shadow: 0 0 1rem rgba(0,0,0,.2)
    }
</style>
