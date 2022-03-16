# tree 树形展示

## 基本用法

树的基本用法

:::demo
```vue
<template>
<z-tree :data="[
  {
    label: 'node-1',
    level: 1,
    open: true,
    children: [
      {
      	label: 'node-11',
    	  level: 2,
        open: true,
        children: [
          { label: 'node-111', level: 3, },
          { label: 'node-112', level: 3, },
        ],
      },
      {
      	label: 'node-12',
    	  level: 2,
        children: [
          { label: 'node-121', level: 3, },
          { label: 'node-122', level: 3, },
          { label: 'node-123', level: 3, },
        ],
      },
    ],
  },
  {
    label: 'node-2',
    level: 1,
  }]"></z-tree>
</template>
```
:::