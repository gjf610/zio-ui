import { defineComponent, toRefs } from 'vue'
import type { SetupContext } from 'vue';
import { ButtonProps, buttonProps } from './button-type'
import useButton from './use-button';
import './button.scss'
export default defineComponent({
  name: 'ZButton',
  emits: ['click'],
  props: buttonProps,
  setup(props: ButtonProps, ctx: SetupContext) {
    const { disabled, loading } = toRefs(props);
    const { classes } = useButton(props);

    const onClick = (e: MouseEvent) => {
      ctx.emit('click', e)
    }
    return () => (
      <button class={classes.value} disabled={disabled.value} onClick={onClick}>
        {loading.value && <span class='zioui-btn-loading'></span>}
        {ctx.slots.default?.()}
      </button>
    )
  }
})