import type { PropType, ExtractPropTypes } from "vue";

export type TreeData = Array<TreeItem>

export interface TreeItem {
  label: string
  children?: TreeData
  disableToggle?: boolean
  disabled?: boolean
  checked?: boolean
  [key: string]: any
}

export const treeProps = {
  data: {
    type: Array as PropType<TreeData>,
    default: () => []
  },
  checkable: {
    type: Boolean,
    default: false
  }
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>