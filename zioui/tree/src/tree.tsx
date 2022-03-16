import './tree'

import { defineComponent } from 'vue'
import { treeProps, TreeProps } from './tree-types'
import IconOpen from '../../../src/assets/open'
import IconClose from '../../../src/assets/close'

export default defineComponent({
  name: 'tree',
  props: treeProps,
  setup(props: TreeProps, ctx) {
    const openedTree = (tree) => {
      return tree.reduce((acc, item) => (
        item.open
          ? acc.concat(item, openedTree(item.children))
          : acc.concat(item)
      ), [])
    }
    let openedData = openedTree(props.data)
    const toggle = (item) => {
      if (!item.children) {
        return
      }
      item.open = !item.open
      openedData = openedTree(props.data)
      console.log('toggle', openedData)
    }
    // 缩进
    const Indent = () => <span style='display: inline-block;width: 16px'></span>
    const renderNode = (item) => (
      <div style={{ paddingLeft: 20 * (item.level - 1) + 'px' }}>
        {
          item.children
            ? item.open
              ? <IconOpen onClick={() => toggle(item)} />
              : <IconClose onClick={() => toggle(item)} />
            : <Indent />
        }
        {item.label}
      </div>
    )
    const renderTree = (treeData) => {
      return treeData.map(item => renderNode(item))
    }
    return () => (
      <div class="z-tree">
        {renderTree(openedData)}
      </div>
    )
  }
})