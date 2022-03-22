import type { App } from 'vue'
import Button from './src/button'

// 声明为插件，可以引入组件
Button.install = function (app: App): void {
  app.component(Button.name, Button)
}

export { Button }
// 单独引入Tree，为后面按需做基础
export default {
  title: 'Button 按钮',
  category: '通用组件',
  status: '0%',
  install(app: App): void {
    app.use(Button as any)
  }
}