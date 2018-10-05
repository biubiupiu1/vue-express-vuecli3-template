# vue & express & vue-cli3

> 一个基于vue-cli3构建的vue + express 前后端同时开发模板

- Vue2
- Vue-cli3
- Webpack4
- babel7
- HotModuleReplacement 
- Express

## 安装过程

``` bash
# 安装依赖
npm install

# 开启开发本地服务端口4000
npm run dev

# 压缩打包
npm run build

# 部署上线
npm run start
```

## 文件目录

- dist  打包目标文件夹
- src/client    前端文件夹(vue)
- src/server    后端文件夹(express)
- babel.config.js  [babel7的配置文件](https://new.babeljs.io/docs/en/next/babelconfigjs.html)
- vue.config.js     [vue-cli3的配置文件](https://cli.vuejs.org/zh/config/)

## License

[The MIT License](http://opensource.org/licenses/MIT)