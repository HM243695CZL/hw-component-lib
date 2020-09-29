<template>
    <aside class="hw-aside" :style="{width}">
        <slot></slot>
    </aside>
</template>

<script>
    export default {
        name: "HwAside",
        componentName: 'HwAside',
        props: {
            width: {
                type: String,
                default: '300px'
            }
        }
    }
</script>

<style scoped>

</style>
