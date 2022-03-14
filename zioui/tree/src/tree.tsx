import './tree.scss'

import { defineComponent } from 'vue'
import { treeProps, TreeProps } from './tree-types'

export default defineComponent({
  name: 'tree',
  props: treeProps,
  setup(props: TreeProps, ctx) {
    console.log(props.data)
    const renderNode = (item) => <div>{item.label}</div>
    const renderTree = (treeData) => {
      return treeData.map(item => {
        if (item.children) {
          return (
            <>
              {renderNode(item)}
              {renderTree(item.children)}
            </>
          )
        }
        return renderNode(item)
      })
    }
    return () => (
      <div class="z-tree">
        {renderTree(props.data)}
      </div>
    )
  }
})