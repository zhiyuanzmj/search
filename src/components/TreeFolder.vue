<template>
    <p>
        <span>{{folder.name}}</span>
        <tree-folder-contents :children="folder.children"></tree-folder-contents>
    </p>
</template>

<script>
//import TreeFolderContents from './TreeFolderContents.vue'
export default {
    props:['folder']
    ,components:{
        TreeFolderContents:()=>import('./TreeFolderContents.vue')
        //TreeFolderContents
    }
}
</script>

<style>

</style>
