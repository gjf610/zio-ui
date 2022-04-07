# Button 按钮

### 按钮类型

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

### 按钮大小

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

### 禁用按钮

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

### 支持显示加载中
:::demo
```vue
<template>
  <z-button>加载中</z-button>
</template>
```
:::