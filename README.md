# 项目名
[中文版](README.md) [英文版](README_EN.md)

## 介绍
webpack从零搭建一个vue、vuex、vue-router的移动端开发模板

### npm init

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


