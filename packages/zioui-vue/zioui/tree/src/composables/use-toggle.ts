import { ref } from 'vue'
import { TreeData, TreeItem } from '../tree-types'

export default function useToggle(data: TreeData): any {
  const openedTree = (tree: any) => {
    return tree.reduce((acc: TreeItem, item: TreeItem) => (
      item.open
        ? acc.concat(item, openedTree(item.children))
        : acc.concat(item)
    ), [])
  }

  let openedData = ref(openedTree(data))

  const toggle = (item: TreeItem) => {
    if (!item.children) return
    if (item.disableToggle) return
    item.open = !item.open
    openedData.value = openedTree(data)
  }

  return {
    openedData,
    toggle
  }
}
