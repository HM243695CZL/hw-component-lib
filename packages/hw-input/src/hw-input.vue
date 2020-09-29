<template>
    <div
            :class="[
            type === 'textarea' ? 'hw-textarea' : 'hw-input',
            inputSize ? 'hw-input-' + inputSize : '',
            {
                'is-disabled': inputDisabled,
                'is-exceed': inputExceed,
                'hw-input-group': $slots.prepend || $slots.append,
                'hw-input-group-append': $slots.append,
                'hw-input-group-prepend': $slots.prepend,
                'hw-input-prefix': $slots.prefix || prefixIcon
            }
        ]"
    >

    </div>
</template>

<script>
    import emitter from 'element-ui/src/mixins/emitter'
    import Migrating from 'element-ui/src/mixins/migrating'

    export default {
        name: "HwInput",
        componentName: 'HwInput',
        mixins: [emitter, Migrating],
        inheritAttrs: false,
        inject: {
            hwForm: {
                default: ''
            },
            hwFormItem: {
                default: ''
            }
        },
        props: {
            type: {
                type: String,
                default: 'text'
            },
            size: String,
            disabled: Boolean,
            showWordLimit: {
                type: Boolean,
                default: false
            },
            readonly: Boolean,
            showPassword: {
                type: Boolean,
                default: false
            },
            value: [String, Number]
        },
        computed: {
            _hwFormItemSize() {
                return (this.hwFormItem || {}).hwFormItemSize
            },
            inputSize() {
                return this.size || this._hwFormItemSize || (this.$ELEMENT || {}).size
            },
            inputDisabled() {
                return this.disabled || (this.hwForm || {}).disabled
            },
            inputExceed(){
                // 如果初始值的长度大于maxlength，则显示超出样式
                return this.isWordLimitVisible &&
                    (this.textLength > this.upperLimit)
            },
            isWordLimitVisible(){
                return this.showWordLimit && this.$attrs.maxlength &&
                        (this.type === 'text' || this.type === 'textarea') &&
                        !this.inputDisabled && !this.readonly && !this.showPassword
            },
            textLength() {
                if(typeof this.value === 'number'){
                    return String(this.value).length
                }
                return (this.value || '').length
            },
            upperLimit() {
                return this.$attrs.maxlength
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
