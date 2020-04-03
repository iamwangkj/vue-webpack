# vue-webpack-template
webpack从零搭建一个vue、vue-router、vuex的移动端开发模板



打包结果要分目录：index.html css/ js/ img/
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

## wepack相关内容
### 初始化项目
npm init

### vscode添加eslint插件
1. vscode安装eslint插件，多看eslint插件的设置说明
vscode的设置editor:format on save需要关掉，不然vscode和eslint的格式化规则不一样，会导致冲突

```
// 保存时自动修复（eslint.autoFixOnSave已弃用，使用以下）
"editor.codeActionsOnSave": {
	"source.fixAll": true
},
```

下面的eslint插件配置可不写，使用默认即可

```
// 指定eslint的规则文件
"eslint.options": {
	"configFile": "C:/workplace/.eslintrc.json"
},
// 关联文件类型
"eslint.prode": ["javascript", "javascriptreact", "typescript", "typescriptreact", "html", "vue"],
// 以下为弃用属性
"eslint.validate": ["javascript", "javascriptreact"],
"eslint.format.enable": true,
"editor.formatOnSave": true,
```

2. 创建eslint规则
npm安装eslint到devDependencies（npm i -D eslint），生成eslint rules文件.eslintrc.js（npx eslint --init）


### 添加webpack配置
1. 安装webpack（npm i -D webpack webpack-cli）
webpack-cli：webpack4后分离出cli
2. 创建webpack.config.js

- 添加模板插件（npm i -D html-webpack-plugin）

```
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}
```

- js使用babel-loader解析
安装babel-loader（npm i -D babel-loader @babel/core @babel/preset-env）
> @babel/core：babel-loader依赖于@babel/core
babel/preset-env：babel-loader使用了规则@babel/preset-env

- vue使用vue-loader解析
安装vue-loader（npm i -D vue-loader vue-template-compiler）
> vue-template-compiler：因为每个 vue 包的新版本发布时，一个相应版本的 vue-template-compiler 也会随之发布。编译器的版本必须和基本的 vue 包保持同步，这样 vue-loader 就会生成兼容运行时的代码。这意味着你每次升级项目中的 vue 包时，也应该匹配升级 vue-template-compiler。
Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 vue-loader 应用到所有扩展名为 .vue 的文件上之外，请确保在你的 webpack 配置中添加 Vue Loader 的插件vue-loader/lib/plugin。

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
    new VueLoaderPlugin() // 请确保引入这个插件！
  ]
}
```

> 这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的script块。

- scss使用sass-loader解析
安装sass-loader（npm i -D sass-loader sass style-loader css-loader）
> sass（即dart-sass）：sass-loader需要sass（即dart-sass）或node-sass，但node-sass下载太慢了
style-loader：Creates `style` nodes from JS strings
css-loader：Translates CSS into CommonJS

- 使用postcss-plugin-pxtoviewport适配移动端屏幕
postcss-plugin-pxtoviewport postcss-loader

### 启动本地服务器，并支持热更新
安装webpack-dev-server（npm i -D webpack-dev-server）

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
```
// 启动本地服务
npx webpack-dev-server --config ./build/webpack.config.js
```

---
## vue相关内容

### vue-router
npm i -S vue-router

### vuex
npm i -S vuex




















