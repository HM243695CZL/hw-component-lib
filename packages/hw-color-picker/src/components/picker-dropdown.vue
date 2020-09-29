<template>
    <transition name="hw-zoom-in-top" @after-leave="doDestroy">
        <div class="hw-color-dropdown" v-show="showPopper">
            <div class="hw-color-dropdown-main-wrapper">
                <hue-slider ref="hue" :color="color" vertical style="float: right;"/>
                <sv-panel ref="sl" :color="color"/>
            </div>
            <alpha-slider v-if="showAlpha" ref="alpha" :color="color"/>
            <predefine v-if="predefine" :color="color" :colors="predefine" />
            <div class="hw-color-dropdown-btns">
                <span class="hw-color-dropdown-value">

                </span>
            </div>
        </div>
    </transition>
</template>

<script>
    import SvPanel from './sv-panel'
    import HueSlider from './hue-slider'
    import AlphaSlider from './alpha-slider'
    import predefine from './predefine'
    // import HwInput from '/packages/hw-input'
    // import HwButton from '/packages/hw-button'
    export default {
        name: "picker-dropdown",
        props: {
            color: {
                required: true
            },
            showAlpha: Boolean,
            predefine: Array
        },
        components: {
            HueSlider,
            SvPanel,
            AlphaSlider,
            predefine
        },
        watch: {
            showPopper(val) {
                if (val === true) {
                    this.$nextTick(() => {
                        const {sl, hue, alpha} = this.$refs
                        sl && sl.update()
                        hue && hue.update()
                        alpha && alpha.update()
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
