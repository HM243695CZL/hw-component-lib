<template>
    <header class="hw-header" :style="{height}">
        <slot></slot>
    </header>
</template>

<script>
    export default {
        name: "HwHeader",
        componentName: 'HwHeader',
        props: {
            height: {
                type: String,
                default: '60px'
            }
        }
    }
</script>

<style scoped>

</style>
