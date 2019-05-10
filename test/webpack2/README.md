1.看官网
2.安装环境 node https://nodejs.org/en/
3.npm 包管理工具 项目 下载想要的包 下载命令  npm install  淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org  使用cnpm
4.生成一个项目说明书 npm init
5.下载webpack  下载webpack-cli
6.webpack安装到了node_modules文件夹下
7.了解mode模式 生产和开发
8.了解--watch 监听
9.tree shaking
10.(funciton(){modules})
({
    "src/button.js":function{},
    "src/color.js":function{},
    "src/footer.js":function{},
    "src/index.js":function{},
    "src/nav.js":function{},
})

用函数当作作用域

------------------------------------------------------
package.json:
"scripts": {
    "webpack": "webpack",
    "webpack-dev-server": "webpack-dev-server",
    "dev": "npm run webpack-dev-server -- --env.mode development --hot",//webpack-dev-server将打包好的文件存入浏览器内存,不生成文件夹  --hot局部刷新
    "prod": "npm run webpack -- --env.mode production"
}



-----------------------------------------------------------
webpack处理sass步骤：
参考：https://www.webpackjs.com/loaders/sass-loader/
1.先安装以下loader：
npm install sass-loader node-sass css-loader style-loader --save-dev

或者

sass编译成css的loader:
npm install sass-loader node-sass --save-dev
在main.js中引入css的loader:
npm install css-loader --save-dev
在index.html中引入style标签设置css样式的loader：
npm install style-loader --save-dev

在index.html中使用link方式引入css文件的plugin：
npm install --save-dev mini-css-extract-plugin
https://github.com/webpack-contrib/mini-css-extract-plugin


2.webpack.base.conf.js中引入loader
module: {
    rules: [
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"// 将 JS 字符串生成为 style 节点
                },
                {
                    loader: "css-loader"// 将 CSS 转化成 CommonJS 模块
                },
                {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }
            ]
        }
    ]
}



将ES6转成ES5的loader：
npm install babel-loader @babel/core @babel/preset-env --save-dev



--------------------------------------------------------------------------------------------
根据传入参数加载presets，第一个--是表明后面的是传进来的参数，--env.presets表示传给env的哪个变量，a和b是值
npm run dev -- --env.presets a --env.presets b


压缩文件的plugin：
npm install compression-webpack-plugin --save-dev


