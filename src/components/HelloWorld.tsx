import { defineComponent, SetupContext } from "vue"

// 方式1： 函数式组件
type HelloType = {
  a?: string
}
const HelloWorld = (props: HelloType, context: SetupContext) => {
  return <div>hello, world!</div>
}

// defineComponent({
//   render() {
//     return <div>hello, world</div>
//   },
//   setup(props, context) {
//     return () => {
//       return <div>hello, world</div>
//     }
//   }
// })
export default HelloWorld