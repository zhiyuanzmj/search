<template>
<label>
    <input 
        :value="value" 
        v-bind="$attrs"
        :title="title"
        v-on="inputListeners"
    >
</label>
</template>
<script>
export default {
    inheritAttrs:false,
    computed:{
        inputListeners:function(){
            var vm=this
            return Object.assign({},this.$listeners,{
                input:function(event){
                    vm.$emit('update:title','zmj')
                    vm.$emit('input',event.target.value)
                }    
            })
        }
    },
    props:['value','title']
}
</script>
