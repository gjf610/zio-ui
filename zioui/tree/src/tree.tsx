import './tree.scss'

import { defineComponent, render } from 'vue'
import { treeProps, TreeProps } from './tree-types'

export default defineComponent({
  name: 'tree',
  props: treeProps,
  setup(props: TreeProps, ctx) {
    console.log(props.data)
    return () => (
      <div class="z-tree">{props.data.map(item => <div>{item.label}</div>)}</div>
    )
  }
})