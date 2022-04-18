<h1 align="center">ZIO UI</h1>

<p align="center">一个 Vue3.2 的组件库。</p>

🌈 特性：

- 🔥 眼下最时髦的 Vue3.2
- ⚡ 高效、快速的 Vite
- 🔑 支持 TypeScript + TSC
- ✨ 支持按需引入
- 🎨 scss

## 🔧 如何使用

### 1. 安装

```
npm i zioui
```

### 2. 引入

在`main.ts`文件中引入`zioui`。

```ts
import { createApp } from 'vue'
import App from './App.vue'
// 引入 ZioUI 组件库及样式
import ZioUI from 'zioui'
import 'zioui/style.css'
createApp(App).use(ZioUI).mount('#app')
```

### 3. 使用

在`App.vue`文件中使用 zio ui 组件。

```vue
<script setup lang="ts">
import { Button } from 'zioui';
</script>
<template>
  <Button variant="solid">确定</Button>
</template>
```

打开浏览器访问：[http://localhost:3000/](http://localhost:3000/)