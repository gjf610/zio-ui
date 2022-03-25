import { defineComponent, toRefs } from 'vue'
import type { SetupContext } from 'vue';
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'ZButton',
  emits: ['click'],
  props: buttonProps,
  setup(props: ButtonProps, ctx: SetupContext) {
    const { disabled } = toRefs(props);
    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e)
    }
    return () => (
      <button disabled={disabled.value} onClick={onClick}>{ctx.slots.default?.()}</button>
    )
  }
})