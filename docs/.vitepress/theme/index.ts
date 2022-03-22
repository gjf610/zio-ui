import Theme from "vitepress/dist/client/theme-default"
import button from "../../../zioui/button"
import Tree from "../../../zioui/tree"

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(button);
    app.use(Tree);
    registerComponents(app)
  }
}