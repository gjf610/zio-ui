import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/quick-start/' },
    {
      text: '通用', children: [
        { text: 'Button 按钮', link: '/component/button/' },
      ]
    },
    { text: '导航', },
    { text: '反馈', },
    { text: '数据录入' },
    {
      text: '数据展示', children: [
        { text: 'Tree 树', link: '/component/tree/' },
      ]
    },
    { text: '布局', },
  ]
}
const nav = [
  { text: '组件', link: '/quick-start/' },
  { text: 'github', link: 'https://github.com/gjf610/zio-ui' }
]
const config = {
  base: '/zioui-website/',
  title: 'ZIO UI',
  themeConfig: {
    sidebar,
    nav
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
}

export default config