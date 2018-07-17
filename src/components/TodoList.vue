<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <slot v-bind:todo="todo">
                {{todo.text}}
            </slot>
        </li>
    </ul>
</template>
<script>
export default {
    props:{
        "todos":Array
    }
}
</script>

