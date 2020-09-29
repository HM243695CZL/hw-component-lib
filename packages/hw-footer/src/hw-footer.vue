<template>
    <footer class="hw-footer" :style="{height}">
        <slot></slot>
    </footer>
</template>

<script>
    export default {
        name: "HwFooter",
        componentName: 'HwFooter',
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
