# tree 树形展示

## 基本用法

树的基本用法
:::demo 渲染一棵基本树
```vue
<template>
<z-tree :data="data" checkable>
    <template #icon="item">
      <svg
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4160"
        width="12"
        height="12"
        v-if="item.open"
      >
        <path d="M64 320l448 448 448-448z" fill="#8C92A4" p-id="4161"></path>
      </svg>
      <svg
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4361"
        width="12"
        height="12"
        v-else
      >
        <path d="M256 64l448 448-448 448z" fill="#8C92A4" p-id="4362"></path>
      </svg>
    </template>
</z-tree>

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
    disableToggle: true,
    disabled: true,
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

