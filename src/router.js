import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Zmj from './views/Zmj.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/zmj',
      name:'zmj'
      ,component:Zmj
    },
    {
      path: '/about/:id',
      name: 'about',
      component: About
      ,props:{zmj:'zhiyuanzmj',id:'adad'}
      ,children:[
        {
          path:'profile',
          component:About
          ,props:{zmj:'zhiyuanzmj'}
        }
        ,{
          path:'',
          component:Home
        }
      ]
    }
  ]
})
