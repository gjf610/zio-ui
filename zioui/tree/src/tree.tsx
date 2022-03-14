import './tree.scss'

import { defineComponent } from 'vue'
import { treeProps, TreeProps } from './tree-types'
import IconOpen from './assets/open.svg'
export default defineComponent({
  name: 'tree',
  props: treeProps,
  setup(props: TreeProps, ctx) {
    console.log(props.data)
    // 缩进
    const Indent = () => <span style='display: inline-block;width: 16px'></span>
    const renderNode = (item) => (
      <div style={{ paddingLeft: 20 * (item.level - 1) + 'px' }}>
        {item.children ? <IconOpen /> : <Indent />}
        {item.label}
      </div>
    )
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