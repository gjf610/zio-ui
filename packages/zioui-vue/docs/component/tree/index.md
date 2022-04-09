# tree 树形展示

## 基本用法

树的基本用法
:::demo 渲染一棵基本树
```vue
<template>
<z-tree :data="data"></z-tree>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref([
  {
    label: '一级 1', level: 1,
    children: [{
      label: '二级 1-1', level: 2,
      children: [{
        label: '三级 1-1-1', level: 3,
      }]
    }]
  }, 
  {
    label: '一级 2', level: 1,
    open: true, // 新增
    disableToggle: true,
    children: [{
      label: '二级 2-1', level: 2,
      children: [{
        label: '三级 2-1-1', level: 3,
      }]
    }, {
      label: '二级 2-2', level: 2,
      children: [{
        label: '三级 2-2-1', level: 3,
      }]
    }]
  }, 
  {
    label: '一级 3', level: 1,
    open: true, // 新增
    children: [{
      label: '二级 3-1', level: 2,
      children: [{
        label: '三级 3-1-1', level: 3,
      }]
    }, {
      label: '二级 3-2', level: 2,
      open: true, // 新增
      children: [{
        label: '三级 3-2-1', level: 3,
      }]
    }]
  }, {
    label: '一级 4', level: 1,
  }])
</script>
```
:::

