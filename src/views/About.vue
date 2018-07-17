<template>
  <div class="about">
    <h1>This is an {{zmj}}about page{{test}}</h1>
    <button type="button" class="btn btn-primary">{{id}}</button>
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
@import "~bootstrap/scss/bootstrap";
$color:white;
body{
    background: $color;
}
</style>
<script>
export default {
  props:['id','zmj'],
  name:"about",
  data(){
    return{
      test:'1'
    }
  },
  watch:{
    beforeRouteUpdate (to,from,next){
      this.test=from
      next()
    }
  }
}
</script>

