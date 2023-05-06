import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'



export default {
  // 添加到 HTML 的 head 顶部的东西
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    // ['link', { rel: 'stylesheet', hre: '/css/style.css' }]
  ],

  theme: defaultTheme({

    // nav: require("./nav.js"),
    // sidebar: require("./sidebar.js"),

    // 准备发布到 GitHub 的仓库名称
    // base: '' ,

    // 运行端口
    // port: 8014,

    /* logo */
    logo: '/images/logo.png',

    /* 语言 */
    lang: 'zh-CN',

    /* 标题 */
    title: 'ChaChaL',

    /* 颜色模式 */
    colorMode: 'dark',         // 默认暗黑
    colorModeSwitch: true,     // 开启颜色切换

    /* 主页 */
    home: '/Home.md/',

    /* 标题锚点 */
    // markdown.anchor: false,

    /* 侧边栏 */
    sidebar: 'auto',
    collapsible: true,
    // collapsable: true,
    sidebarDepth: 1,            // 只显示 h1 h2


    /* 导航栏 */
    navbar: [
      // 编程语言
      {
        text: '编程语言',
        children: [

        ]
      },

      // 系统配置
      {
        text: '系统配置',         // 导航栏显示的标题
        children: [
          '/系统配置/Windows/Windows配置.md/',  // Markdown 文件相对路径
          '/系统配置/MacOS/MacOS配置.md/',      // Markdown 文件相对路径
          {
            text: 'Linux 配置', // 导航栏显示的标题
            children: [
              '/系统配置/Linux/Ubuntu配置.md/', // Markdown 文件相对路径
              '/系统配置/Linux/CentOS配置.md/', // Markdown 文件相对路径
            ]
          },
        ]
      },

      // 关于
      {
        text: '关于',           // 导航栏显示的标题
        link: '/关于/about.md', // Markdown 文件相对路径
      }
    ],


  }),

  plugins: [
    searchPlugin({
      // 搜索框在不同 locales 下的文字
      locales: {
        '/': { placeholder: 'Search' },
        '/zh/': { placeholder: '搜索' }
      },
      hotKeys: ['ctrl', 'k']
    })
  ]


}