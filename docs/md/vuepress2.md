
## 一. vuepress2

[vuepress 官方文档](https://v2.vuepress.vuejs.org/zh/)

### 1. 安装

初始化项目

~~~shell
git init
npm init
~~~

将 VuePress 安装为本地依赖

~~~shell
npm install -D vuepress@next
~~~

修改 `package.json` ，在其中添加一些 scripts

~~~json
{
  "name": "blog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev" : "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "vuepress": "^2.0.0-beta.61"
  }
}
~~~

将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

~~~shell
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
~~~

创建你的第一篇文档

~~~shell
mkdir docs
echo '# Hello VuePress' > docs/README.md
~~~

在本地启动服务器来开发你的文档网站

~~~shell
npm run docs:dev
~~~







### 2. 访问第三方网站图片

> 如果源网站设置了防盗链，那么在 vuepress 中的 Markdown 文件引入第三方网站图片会报 403 错误
>
> 由于我们 vuepress 本地服务把当前本站的 `referrer` 带给了 cdn 图片请求，第三方发现不是本站的请求，所以直接`403`错误。



解决办法：直接将 referrer 设置为 `no-referrer`。



修改 `config.js`文件：

~~~javascript

export default {

  head: [
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ],

  theme: defaultTheme({
    )}  
}
~~~
