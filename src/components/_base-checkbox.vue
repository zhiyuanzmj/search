<template>
    <div class="custom-control custom-checkbox">
        <input type="checkbox" id="z" class="custom-control-input"
            :checked="checked"
            v-on="inputListeners">
        <label class="custom-control-label" for="z">Check this custom checkbox</label>
    </div>
</template>
<script>
export default {
    inheritAttrs:true,
    model:{
        prop:'checked',
        event:'change'
    },
    computed:{
        inputListeners:function(){
            let vm=this
            var zmj= Object.assign({},this.$listeners,{
                change:function(event){
                    vm.$emit('change',event.target.checked)
                }
            })
            return zmj
        }
    },
    props:{
        checked:Boolean
    }
}
</script>

