# Button 按钮


:::demo 使用`size`、`style`属性来定义 Card 的样式。

```vue
<template>
  <z-button @click="onClick" :disabled="true">按钮</z-button>
</template>
<script lang="ts" setup>
const onClick = () =>[
  console.log('hi!')
]
</script>
```
:::