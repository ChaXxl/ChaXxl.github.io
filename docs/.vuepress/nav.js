module.exports = [
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
]