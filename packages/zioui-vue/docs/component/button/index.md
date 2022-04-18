# Button 按钮
按钮用于开始一个即时操作。

#### 何时使用
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

### 形态

:::demo 通过`variant`设置按钮类型，目前支持`solid`、`outline`、`text`三种类型，默认为`outline`类型。
```vue
<template>
  <div class="button-size-demo">
    <z-button variant="solid">Solid Button</z-button>
    <z-button>Outline Button</z-button>
    <z-button variant="text">Text Button</z-button>
  </div>
</template>
```
:::

### 主题色

:::demo 通过`color`设置按钮主题，目前支持`secondary`、`primary`、`danger`三种类型，默认为`secondary`类型。
```vue
<template>
  <div class="button-size-demo">
    <z-button variant="solid" color="secondary">Secondary</z-button>
    <z-button color="secondary">Secondary</z-button>
    <z-button variant="text" color="secondary">Secondary</z-button>
  </div>
  <br />
  <div class="button-size-demo">
    <z-button variant="solid" color="primary">Primary</z-button>
    <z-button color="primary">Primary</z-button>
    <z-button variant="text" color="primary">Primary</z-button>
  </div>
  <br />
  <div class="button-size-demo">
    <z-button variant="solid" color="danger">Danger</z-button>
    <z-button color="danger">Danger</z-button>
    <z-button variant="text" color="danger">Danger</z-button>
  </div>
</template>
```
:::

### 尺寸

:::demo 通过`size`设置按钮大小，支持`xs`、`sm`、`md`、`lg`四种类型，默认为`md`。
```vue
<template>
  <div class="button-size-demo">
    <z-button size="xs">Mini</z-button>
    <z-button size="sm">Small</z-button>
    <z-button>Middle</z-button>
    <z-button size="lg">Large</z-button>
  </div>
</template>
```
:::

### 禁用状态

:::demo 通过`disabled`参数设置按钮禁用状态。

```vue
<template>
  <div class="button-size-demo">
    <z-button theme="solid">Solid Button</z-button>
    <z-button>Outline Button</z-button>
    <z-button theme="text">Text Button</z-button>
  </div>
  <br />
  <div class="button-size-demo">
    <z-button theme="solid" disabled>Solid Button</z-button>
    <z-button disabled>Outline Button</z-button>
    <z-button theme="text" disabled>Text Button</z-button>
  </div>
</template>
```

:::

### 加载中状态
:::demo
```vue
<template>
  <z-button>加载中</z-button>
</template>
```
:::

### Button 参数

| 参数名   | 类型                              | 默认        | 说明                  | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :-------------------- | :------------------------ |
| variant  | [IButtonVariant](#ibuttonvariant) | 'outline'   | 可选，按钮形态        | [形态](#形态)             |
| color    | [IButtonColor](#ibuttoncolor)     | 'secondary' | 可选，按钮主题        | [主题色](#主题色)         |
| size     | [IButtonSize](#ibuttonsize)       | 'md'        | 可选，按钮尺寸        | [尺寸](#尺寸)             |
| disabled | `boolean`                         | false       | 可选，是否禁用 button | [禁用状态](#禁用状态)     |
| loading  | `boolean`                         | false       | 可选，设置加载中状态  | [加载中状态](#加载中状态) |

### 类型

#### IButtonVariant

```ts
type IButtonVariant = 'solid' | 'outline' | 'text';
```

#### IButtonSize

```ts
type IButtonSize = 'lg' | 'md' | 'sm' | 'xs';
```

#### IButtonColor

```ts
type IButtonColor = 'primary' | 'secondary' | 'danger';
```