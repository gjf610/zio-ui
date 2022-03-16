import { ref } from 'vue'
import { TreeData } from '../tree-types'

export default function useToggle(data: TreeData): any {
  const openedTree = (tree) => {
    return tree.reduce((acc, item) => (
      item.open
        ? acc.concat(item, openedTree(item.children))
        : acc.concat(item)
    ), [])
  }

  let openedData = ref(openedTree(data))

  const toggle = (item) => {
    if (!item.children) {
      return
    }
    item.open = !item.open
    openedData.value = openedTree(data)
  }

  return {
    openedData,
    toggle
  }
}
