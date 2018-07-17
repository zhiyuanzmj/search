<template>
    <ul>
        <li :key="child.name" v-for="child in children">
            <tree-folder v-if="child.children" :folder="child"/>
            <span v-else>{{child.name}}</span>
        </li>
    </ul>
</template>

<script>
import TreeFolder from './TreeFolder.vue'
export default {
    props:['children']
    ,components:{
        TreeFolder
    }
}
</script>

<style>

</style>
