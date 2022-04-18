# tree 树形展示

一种呈现嵌套结构的组件。

#### 何时使用

文件夹、组织架构等，世间万物的大多数结构都是树形结构。使用树组件可以完整展现其中的层级关系，并具有展开/收起、选择等交互功能。

### 基本用法

:::demo 展示嵌套树形结构的呈现、连接线、展开/收起、点击选择等功能。
```vue
<template>
  <z-tree :data="data1"></z-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const data1 = ref([
  {
    label: 'Parent node 1', level: 1,
    children: [{
      label: 'Parent node 1-1', level: 2,
      children: [{
        label: 'Leaf node 1-1-1', level: 3,
      }]
    }]
  }, 
  { label: 'Leaf node 2' }
]);
</script>
```
:::

### 可勾选
:::demo 通过`checkable`开启勾选功能。

```vue
<template>
  <z-tree :data="data" checkable></z-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'Parent node 1', level: 1,
    children: [
      {
        label: 'Parent node 1-1', level: 2,
        children: [
          { label: 'Leaf node 1-1-1', level: 3 }
        ]
      },
      { label: 'Leaf node 1-2', level: 2, }
    ]
  },
  { label: 'Leaf node 2' }
]);

</script>
```
:::

### 禁用状态

:::demo 通过`disableToggle`/`disabled`分别禁用展开/收起、点击选择。
```vue
<template>
  <z-tree :data="data" checkable></z-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'Parent node 1', level: 1,
    children: [
      {
        label: 'Parent node 1-1', level: 2,
        disableToggle: true,
        disabled: true,
        children: [
          { label: 'Leaf node 1-1-1', level: 3 }
        ]
      },
      { label: 'Leaf node 1-2', level: 2, 
      }
    ]
  },
  { label: 'Leaf node 2' }
])
</script>
```
:::
### 自定义图标

:::demo 通过`icon`插槽可以自定义展开/收起的图标。
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

### Tree 参数

| 参数名 | 类型                        | 默认值 | 说明                   | 跳转 Demo             |
| :----- | :-------------------------- | :----- | :--------------------- | :-------------------- |
| data   | [ITreeNode\[\]](#itreenode) | []     | 可选，树形结构数据     | [基本用法](#基本用法) |
| checkable  |            | false  | 可选，是否启用勾选功能 | [可勾选](#可勾选)     |

### Tree 插槽

| 插槽名  | 说明                |
| :------ | :------------------ |
| default | 自定义节点          |
| icon    | 自定义展开/收起按钮 |

### TreeNode 参数

| 参数名 | 类型                    | 默认值 | 说明                   |
| :----- | :---------------------- | :----- | :--------------------- |
| data   | [ITreeNode](#itreenode) | []     | 可选，节点数据         |
| checkable  |        | false  | 可选，是否启用勾选功能 |

### 类型

#### ITreeNode

```ts
interface ITreeNode {
  label: string;
  id?: string;
  children?: ITreeNode[];

  checked?: boolean;

  disabled?: boolean;
  disableToggle?: boolean;
}
```
