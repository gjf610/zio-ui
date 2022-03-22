import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ZButton',
  emits: [],
  setup() {
    return () => <button>按钮</button>
  }
})