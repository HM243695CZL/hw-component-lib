'use strict'
import HwButton from './hw-button'
import HwCol from './hw-col'
import HwRow from './hw-row'
import HwContainer from './hw-container'
import HwHeader from './hw-header'
import HwAside from './hw-aside'
import HwMain from './hw-main'
import HwFooter from './hw-footer'
import HwColorPicker from './hw-color-picker'
import HwInput from './hw-input'
const components = [
    HwButton,
    HwCol,
    HwRow,
    HwContainer,
    HwHeader,
    HwAside,
    HwMain,
    HwFooter,
    HwColorPicker,
    HwInput
]
/*
官方原文：Vue.js的插件应该暴露一个install方法
这个方法的第一个参数是Vue构造器，第二个参数是一个可选的选项对象
 */
const install = function(Vue){
    if(install.installed) return
    components.map(component => {
        // 注册或获取全局组件
        Vue.component(component.name, component)
    })
}
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}
/*
在全局引入组件时，使用Vue.use安装插件，必须提供install方法，这里的export default就是用于Vue.use
 */
export default {
    install,
    HwButton,
    HwCol,
    HwRow,
    HwContainer,
    HwHeader,
    HwAside,
    HwMain,
    HwFooter,
    HwColorPicker,
    HwInput
}
