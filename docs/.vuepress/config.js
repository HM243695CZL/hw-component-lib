const path = require('path')
module.exports = {
    title: '你好 hmczl',
    description: 'Just playing around',
    port: 8082,
    palette: path.resolve(__dirname, 'palette.styl'),
    head: [ // 注入到当前页面的html的head标签中
        ['link', { rel: 'icon', href: '/hm.ico'}]
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        siderbarDepth: 2,
        lastUpdated: 'Last Updated', // 文档更新时间， 每个文件git最后提交的时间
        nav: [
            {
                text: '导航',
                link: '/guide/guide.md'
            }
        ],
        sidebar: [
            {
                title: '开发指南',
                collapsable: true,
                children: [
                    ['/install/', '安装'],
                    ['/quick-start/', '快速上手'],
                    ['/theme/', '主题']

                ]
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    ['/button/button.md', 'Button 按钮'],
                    ['/layout/layout.md', 'Layout 布局'],
                    ['/container/container.md', 'Container 布局容器'],
                    ['/color-picker/', '颜色'],
                    ['/input/input.md', 'Input 输入框']
                ]
            }
        ]
    }
}
