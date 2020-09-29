<template>
    <section class="hw-container" :class="{'is-vertical': isVertical}">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        name: "HwContainer",
        componentName: 'HwContainer',
        props: {
            direction: {
                type: String
            }
        },
        computed: {
            isVertical(){
                if(this.direction === 'vertical'){
                    return true
                }else if(this.direction === 'horizontal'){
                    return false
                }
                return this.$slots && this.$slots.default ?
                    this.$slots.default.some(vnode => {
                        const tag = vnode.componentOptions && vnode.componentOptions.tag
                        return tag === 'hw-header' || tag === 'hw-footer'
                    }) : false
            }
        }
    }
</script>

<style scoped>

</style>
