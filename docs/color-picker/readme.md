### Attributes
| 参数         | 说明                    | 类型    | 可选值          | 默认值                                         |
| ------------ | ----------------------- | ------- | --------------- | ---------------------------------------------- |
| disabled     | 是否禁用                | boolean | -               | false                                          |
| size         | 尺寸                    | string  | -               | medium/small/mini                              |
| show-alpha   | 是否支持透明度选择      | boolean | -               | false                                          |
| color-format | 写入v-model的颜色的格式 | string  | hsl/hsv/hex/rgb | hex(show-alpha为false) / rgb(show-alpha为true) |
| popper-class | ColorPicker下拉框的类名 | string  | -               | -                                              |
| predefine    | 预定义颜色              | array   | -               | -                                              |


### Events
| 事件名称      | 说明                               | 回调函数         |
| ------------- | ---------------------------------- | ---------------- |
| change        | 当绑定值变化时                     | 当前值           |
| active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |


