import type { ExtractPropTypes } from "vue";

export const buttonProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
} as const
export type ButtonProps = ExtractPropTypes<typeof buttonProps>