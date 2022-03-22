import Theme from "vitepress/dist/client/theme-default"
import button from "../../../zioui/button/button"
import { Tree } from "../../../zioui/tree"

import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('z-button', button);
    app.component('z-tree', Tree);
    app.component("Demo", Demo)
    app.component("DemoBlock", DemoBlock)

  }
}