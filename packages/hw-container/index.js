import HwContainer from './src/hw-container'
HwContainer.install = function(Vue){
    Vue.component(HwContainer.name, HwContainer)
}
export default HwContainer
