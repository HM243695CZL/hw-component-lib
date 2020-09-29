# Button 按钮
常用的操作按钮

<hw-button>默认按钮</hw-button>
<hw-button type="primary">主要按钮</hw-button>
<hw-button type="success">成功按钮</hw-button>
<hw-button type="info">信息按钮</hw-button>
<hw-button type="warning">警告按钮</hw-button>
<hw-button type="danger">危险按钮</hw-button>

>  按钮大小

<hw-button size="big">大按钮</hw-button>
<hw-button type="primary" size="mid">中等按钮</hw-button>
<hw-button type="success" size="small">小按钮</hw-button>
<hw-button type="info" size="mini">迷你按钮</hw-button>

> 圆角按钮

<hw-button is-round>默认按钮</hw-button>
<hw-button type="primary" is-round>主要按钮</hw-button>
<hw-button type="success" is-round>成功按钮</hw-button>
<hw-button type="info" is-round>信息按钮</hw-button>
<hw-button type="warning" is-round>警告按钮</hw-button>
<hw-button type="danger" is-round>危险按钮</hw-button>

:::demo 使用`type`、`size`属性来定义 Button 的样式。
```html
<hw-button>默认按钮</hw-button>
<hw-button type="primary">主要按钮</hw-button>
<hw-button type="success">成功按钮</hw-button>
<hw-button type="info">信息按钮</hw-button>
<hw-button type="warning">警告按钮</hw-button>
<hw-button type="danger">危险按钮</hw-button>

<hw-button size="big">大按钮</hw-button>
<hw-button type="primary" size="mid">中等按钮</hw-button>
<hw-button type="success" size="small">小按钮</hw-button>
<hw-button type="info" size="mini">迷你按钮</hw-button>

<hw-button is-round>默认按钮</hw-button>
<hw-button type="primary" is-round>主要按钮</hw-button>
<hw-button type="success" is-round>成功按钮</hw-button>
<hw-button type="info" is-round>信息按钮</hw-button>
<hw-button type="warning" is-round>警告按钮</hw-button>
<hw-button type="danger" is-round>危险按钮</hw-button>

```
:::

> rayen

<hw-button rayen="primary" data-text="默认按钮">默认按钮</hw-button>
<hw-button rayen="success" data-text="默认按钮">默认按钮</hw-button>
<hw-button rayen="info" data-text="默认按钮">默认按钮</hw-button>
<hw-button rayen="warning" data-text="默认按钮">默认按钮</hw-button>
<hw-button rayen="danger" data-text="默认按钮">默认按钮</hw-button>

```html
<hw-button rayen="primary" data-text="默认按钮">默认按钮</hw-button>
<hw-button rayen="success" data-text="默认按钮">默认按钮</hw-button>
<hw-button rayen="info" data-text="默认按钮">默认按钮</hw-button>
<hw-button rayen="warning" data-text="默认按钮">默认按钮</hw-button>
<hw-button rayen="danger" data-text="默认按钮">默认按钮</hw-button>
```

### Attributes
| 参数    | 说明     | 类型    | 默认值 | 可选值                                  |
| ------- | -------- | ------- | ------ | --------------------------------------- |
| size    | 大小     | String  | big    | big、mid、small、mini                   |
| type    | 类型     | String  | -      | primary、success、info、warning、danger |
| isRound | 是否圆角 | Boolean | false  |                                         |
| wayra   | 动画     | String  | -      | primary、success、info、warning、danger |
| aylen   | 动画     | String  | -      | primary、success、info、warning、danger |
| rayen   | 动画     | String  | -      | primary、success、info、warning、danger |

注：`wayra`和`aylen`在文档中无法正常显示
```html
<hw-button wayra="primary">默认按钮</hw-button>
<hw-button wayra="success">默认按钮</hw-button>
<hw-button wayra="info">默认按钮</hw-button>
<hw-button wayra="warning">默认按钮</hw-button>
<hw-button wayra="danger">默认按钮</hw-button>
    
<hw-button aylen="primary">默认按钮</hw-button>
<hw-button aylen="success">默认按钮</hw-button>
<hw-button aylen="info">默认按钮</hw-button>
<hw-button aylen="warning">默认按钮</hw-button>
<hw-button aylen="danger">默认按钮</hw-button>
```
