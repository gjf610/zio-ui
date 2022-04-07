import './tree'

import { defineComponent } from 'vue'
import { treeProps, TreeProps, TreeData, TreeItem } from './tree-types'

import useToggle from './composables/use-toggle'
import renderNode from './components/node'

export default defineComponent({
  name: 'ZTree',
  props: treeProps,
  emits: [],
  setup(props: TreeProps) {
    const { openedData, toggle } = useToggle(props.data)
    const renderTree = (treeData: TreeData) => {
      return treeData.map((item: TreeItem) => renderNode(item, toggle))
    }
    console.log(openedData.value)
    return () => (
      <div class="z-tree">
        {renderTree(openedData.value)}
      </div>
    )
  }
})