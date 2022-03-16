import './tree'

import { defineComponent } from 'vue'
import { treeProps, TreeProps } from './tree-types'
import IconOpen from '../../../src/assets/open'
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

    const openedData = openedTree(props.data)

    console.log(openedData)
    // 缩进
    const Indent = () => <span style='display: inline-block;width: 16px'></span>
    const renderNode = (item) => (
      <div style={{ paddingLeft: 20 * (item.level - 1) + 'px' }}>
        {item.children ? <IconOpen /> : <Indent />}
        {item.label}
      </div>
    )
    const renderTree = (treeData) => {
      return treeData.map(item => renderNode(item))
      // return treeData.map(item => {
      //   if (item.children) {
      //     return (
      //       <>
      //         {renderNode(item)}
      //         {renderTree(item.children)}
      //       </>
      //     )
      //   }
      //   return renderNode(item)
      // })
    }
    return () => (
      <div class="z-tree">
        {renderTree(openedData)}
      </div>
    )
  }
})