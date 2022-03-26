import type { ComputedRef, ExtractPropTypes, PropType } from "vue";

export type IButtonVariant = 'solid' | 'outline' | 'text';
export type IButtonColor = 'secondary' | 'primary' | 'danger';
export type IButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export const buttonProps = {
  variant: {
    type: String as PropType<IButtonVariant>,
    default: 'outline',
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'md',
  },
  color: {
    type: String as PropType<IButtonColor>,
  },
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

export interface UseButtonReturnType {
  classes: ComputedRef<{
    [key: string]: string | boolean;
  }>;
}