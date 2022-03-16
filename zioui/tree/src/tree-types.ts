import type { PropType, ExtractPropTypes } from "vue";

export type TreeData = Array<{ label: string, children: TreeData }>

export const treeProps = {
  data: {
    type: Array as PropType<TreeData>,
    required: true,
  }
} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>