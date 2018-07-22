<template>
  <div class="container">
    <card v-for="r in search_result" :key="r.img_type" v-bind="r"></card>   
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  data:function(){
    return {
      search_result:[
        {img_type:'bilibili',title:'比哔哩哔哩弹幕网',text:'一个没有广告的网站'},
        {img_type:'aiqiyi',title:'爱奇艺垃圾',text:'垃圾广告网站'},
      ]
    }
  },
  components: {
    Card
  }
}
</script>
