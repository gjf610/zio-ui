import { computed } from 'vue';
import { ButtonProps, UseButtonReturnType } from "./button-type";


export default function useButton(props: ButtonProps): UseButtonReturnType {
  const colorMap = {
    solid: 'primary',
    outline: 'secondary',
    text: 'secondary',
  };
  const defaultColor = colorMap[props.variant];

  const classes = computed(() => ({
    'zioui-btn': true,
    [`zioui-btn-${props.variant}`]: true,
    [`zioui-btn-${props.variant}-${props.color || defaultColor}`]: true,
    [`zioui-btn-${props.size}`]: true,
  }));

  return { classes }
}