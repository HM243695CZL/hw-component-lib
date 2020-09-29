import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/base.less'
import 'normalize.css/normalize.css'
import store from './store'
import hwUI from '../packages'
import '../packages/theme-chalk/src/index.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 使用Vue.use 安装开发的组件库
Vue.use(hwUI)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
