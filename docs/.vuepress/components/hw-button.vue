<template>
    <button
            class="hw-button"
            :class="[
                type ? 'hw-button-' + type : '',
                size ? 'hw-button-size-' + size : '',
                isRound ? 'is-round' : '',
                wayra ? 'hw-button-wayra hw-button-wayra-' + wayra : '',
                aylen ? 'hw-button-aylen hw-button-aylen-' + aylen : '',
                rayen ? 'hw-button-rayen hw-button-rayen-' + rayen : ''
            ]"
            @click="handleClick"
            :data-text="dataText"
    >
        <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: "hw-button",
        props: {
            size: {
                type: String,
                default: 'big'
            },
            type: {
                type: String,
                default: ''
            },
            isRound: {
                type: Boolean,
                default: false
            },
            wayra: {
                type: String,
                default: ''
            },
            aylen: {
                type: String,
                default: ''
            },
            rayen: {
                type: String,
                default: ''
            },
            dataText: {
                type: String,
                default: ''
            }
        },
        methods: {
            handleClick() {
                this.$emit('click')
            },
        }
    }
</script>
