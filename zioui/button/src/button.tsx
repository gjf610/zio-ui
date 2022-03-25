import { defineComponent, SetupContext } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
export default defineComponent({
  name: 'ZButton',
  emits: ['click'],
  props: buttonProps,
  setup(props: ButtonProps, ctx: SetupContext) {
    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e)
    }
    return () => <button onClick={onClick}>{ctx.slots.default?.()}</button>
  }
})