# 项目名
[中文版](README.md) [英文版](README_EN.md)

## 介绍
webpack从零搭建一个vue、vuex、vue-router的移动端开发模板

### 初始化项目
npm init

### 添加eslint检测
#### vscode安装eslint插件
（多看插件的设置说明），设置eslint插件保存时自动修复eslint报错的地方（eslint.autoFixOnSave已弃用，使用以下）
vscode的设置editor:format on save需要关掉，不然会和eslint的规则冲突
```
// 保存时自动修复
"editor.codeActionsOnSave": {
	"source.fixAll": true
},
// 指定eslint使用哪些规则，默认为以下，可不写
"eslint.options": {
	"configFile": "C:/workplace/.eslintrc.json"
},
// 关联文件类型，默认为以下，可不写
"eslint.prode": ["javascript", "javascriptreact", "typescript", "typescriptreact", "html", "vue"],
// 以下为弃用的配置，老版本的关联文件类型，默认为以下，可不写
"eslint.validate": ["javascript", "javascriptreact"],
"eslint.format.enable": true,
"editor.formatOnSave": true,
```
#### 创建eslint规则
npm安装eslint到devDependencies（npm i -D eslint），创建eslint规则（npx eslint --init）


### 添加webpack配置
安装webpack（npm i -D webpack webpack-cli）
安装webpack-cli是因为webpack4后分离出cli

写webpack.config.js

添加模板插件（npm i -D html-webpack-plugin）
```
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      title: '在webpack中设置'
    })
  ]
}
```


js使用babel-loader（npm i -D babel-loader @babel/core @babel/preset-env），
安装@babel/core是因为babel-loader依赖于@babel/core
安装babel/preset-env，是因为babel-loader使用了规则@babel/preset-env


vue使用vue-loader（npm i -D vue-loader vue-template-compiler）
安装vue-template-compiler是因为，每个 vue 包的新版本发布时，一个相应版本的 vue-template-compiler 也会随之发布。编译器的版本必须和基本的 vue 包保持同步，这样 vue-loader 就会生成兼容运行时的代码。这意味着你每次升级项目中的 vue 包时，也应该匹配升级 vue-template-compiler。
Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 vue-loader 应用到所有扩展名为 .vue 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件：
```
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```
这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。



启动本地服务器，并支持热更新（npm i -D webpack-dev-server）

```
// webpack.config.js
module.exports = {
  devServer: {
    // 设置服务器访问的基本目录
    contentBase: path.resolve(__dirname, 'dist'), // 最好设置成绝对路径
    // 设置服务器的ip地址,可以是localhost
    host: 'localhost',
    // 设置端口
    port: 3000,
    // 设置自动拉起浏览器
    open: false,
    // 设置热更新
    hot: true
  }
}
```

npx webpack-dev-server --config ./build/webpack.config.js，启动本地服务


添加vue-router
npm i -S vue-router






















