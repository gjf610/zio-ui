# 快速开始
引导您如何在项目中使用`ZIO UI`

## Vue版本

当前支持的 Vue 版本`^3.2.0`

## 🔧 如何使用

### 1. 创建一个项目

推荐使用`@vite/cli`创建你的项目
```shell
# npm 6.x
npm create vite my-vue-app --template vue-ts

# npm 7+
npm create vite my-vue-app -- --template vue-ts
```
### 2. 安装

进入你的项目文件夹，使用 NPM 安装`ZIO UI`
```shell
npm i zioui
```

### 3. 引入插件和样式

在`main.ts`文件中引入`zioui`。

```ts
import { createApp } from 'vue'
import App from './App.vue'
// 引入 ZioUI 组件库及样式
import ZioUI from 'zioui'
import 'zioui/style.css'
createApp(App).use(ZioUI).mount('#app')
```

### 4. 使用

在`App.vue`文件中使用 zio ui 组件。

```vue
<script setup lang="ts">
import { Button } from 'zioui';
</script>
<template>
  <Button variant="solid">确定</Button>
</template>
```
### 5. 启动开发调试

```shell
npm run dev
```