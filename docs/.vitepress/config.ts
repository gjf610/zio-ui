import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用', children: [
        { text: 'Button 按钮', link: '/component/button/' },
      ]
    },
    { text: '导航', },
    { text: '反馈', },
    {
      text: '数据录入', children: [
        { text: 'Tree 树', link: '/component/tree/' },
      ]
    },
    { text: '布局', },
  ]
}

const config = {
  themeConfig: {
    sidebar
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  }
}

export default config