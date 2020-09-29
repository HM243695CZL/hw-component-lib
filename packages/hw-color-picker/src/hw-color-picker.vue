<template>
    <div
        :class="[
        'hw-color-picker',
        colorDisabled ? 'is-disabled' : '',
        colorSize ? `hw-color-picker-${colorSize}` : ''
        ]"
        v-clickoutside="hide"
    >
        <div class="hw-color-picker-mask" v-if="colorDisabled"></div>
        <div class="hw-color-picker-trigger" @click="handleTrigger">
            <span class="hw-color-picker-color" :class="{'is-alpha': showAlpha}">
                <span class="hw-color-picker-color-inner" :style="{backgroundColor: displayedColor}"></span>
                <span class="hw-color-picker-empty hw-icon-close" v-if="!value && !showPanelColor"></span>
            </span>
            <span class="hw-color-picker-icon hw-icon-arrow-down" v-if="value || showPanelColor"></span>
        </div>
        <picker-dropdown
            ref="dropdown"
            :color="color"
        />
    </div>
</template>

<script>
    import Color from './color'
    import Emitter from 'element-ui/src/mixins/emitter'
    import Clickoutside from 'element-ui/src/utils/clickoutside'
    import PickerDropdown from './components/picker-dropdown'
    export default {
        name: "HwColorPicker",
        mixins: [Emitter],
        props: {
            value: String,
            showAlpha: Boolean,
            colorFormat: String,
            disabled: Boolean,
            size: String,
            popperClass: String,
            predefine: Array
        },
        inject: {
            hwForm: {
                default: ''
            },
            hwFormItem: {
                default: ''
            }
        },
        data(){
            const color = new Color({
                enableAlpha: this.showAlpha,
                format: this.colorFormat
            })
            return {
                color,
                showPicker: false,
                showPanelColor: false
            }
        },
        directives: { Clickoutside },
        components: {
            PickerDropdown
        },
        computed: {
            displayedColor(){
                if(!this.value && !this.showPanelColor){
                    return 'transparent'
                }
                return this.displayedRgb(this.color, this.showAlpha)
            },
            colorDisabled(){
                return this.disabled || (this.hwForm || {}).disabled
            },
            colorSize(){
                return this.size || this._hwFormItemSize || (this.$ELEMENT || {}).size
            },
            _hwFormItemSize(){
                return (this.hwForm || {}).hwFormItemSize
            }
        },
        mounted(){
          const value = this.value
          if(value){
              this.color.fromString(value)
          }
          this.popperElm = this.$refs.dropdown.$el
        },
        methods: {
            handleTrigger(){
                if(this.colorDisabled) return
                this.showPicker = !this.showPicker
            },
            hide(){
                this.showPicker = false
            },
            displayedRgb(color, showAlpha){
                if(!(color instanceof Color)){
                    throw Error('color should be instance of Color Class')
                }
                const { r, g, b } = color.toRgb()
                return showAlpha ? `rgba(${r}, ${g}, ${b}, ${ color.get('alpha') / 100})` : `rgb(${r}, ${g}, ${b})`
            }
        }
    }
</script>

<style scoped>

</style>
