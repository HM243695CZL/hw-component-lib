# 快速开始
本节将介绍如何在项目中使用hmczl

### <font size="5">引入hmczl</font>
你可以引入整个hmczl，下面先介绍如何完整的引入hmczl

在main.js中写下如下内容
```js
import Vue from 'vue'
import hmczl from 'hmczl'
import 'hmczl/lib/hmczl.css'
Vue.use(hmczl)

new Vue({
  el: '#app',
  render: h => h(App)
});
```
以上代码便完成了hmczl的引入。值得注意的是，样式文件需要单独引入
