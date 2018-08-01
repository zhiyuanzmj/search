<template>
    <base-layout>
        <template slot="header">
            <h1 @click="j">Here might be a page title</h1>
        </template>

        <p @click="z=true">A paragraph for the main content</p>
        <todo-list :todos="todos">
            <template slot-scope=" { todo } ">
                <span v-if="todo.isComplete">√</span>
                {{todo.text}}
            </template>
        </todo-list>
        <component :is="isZmj"></component>
        <async-component v-if="z"></async-component>
        <base-input ref="m"></base-input>
        <tree-folder :folder='folder'></tree-folder>
        <div id="demo">
            <button @click="show=!show">Toggle</button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
        <template slot="footer">
            <p>Here`s some contact info</p>
        </template>
    </base-layout>
</template>
<script>
import BaseLayout from "../components/BaseLayout.vue"
import TodoList from '../components/TodoList.vue'
import TreeFolder from '../components/TreeFolder.vue'
const asyncComponent=()=>({
            component:import("../components/async-component.vue")
        })

export default {
    name:'zmj',
    data(){
        return {
            todos:[
                {id:1,text:'111',isComplete:true},
                {id:2,text:'222',isComplete:false},
                {id:3,text:'333',isComplete:true},
            ]
            ,isZmj:'TodoList'
            ,z:false
            ,show:true
            ,folder:{
                name:'f1',
                children:[
                    {name:'f2'
                    ,children:[
                        {name:'f3'},
                        {name:'f4'}
                    ]
                    }
                ]
            }
        }
    },
    created:function(){
    },
    components:{
        BaseLayout
        ,TodoList
        ,asyncComponent
        ,TreeFolder
    }
    ,methods:{
        j:function(){
            window.console.log(this.$refs.m.$el.children[0].focus())
        }
    }
}
</script>
<style>
.fade-enter-active,.fade-leave-active{
    transition: opacity .5s;
}
.fade-enter,.fade-leave-active{
    opacity: 0;
}
</style>
