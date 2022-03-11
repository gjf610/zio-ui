import Theme from "vitepress/dist/client/theme-default"
import button from "../../../devui/button/button"

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('z-button', button)
  }
}