Vue项目
此处有一个已上线的项目， 此项目是使用jQuery制作的， 我们的目标是把此项目改造成vue项目， 去掉jQuery。
www.codeboy.com/mfresh

下载此项目的源代码：
www.codeboy.com/mfresh/mfresh.zip
或者跟项目经理要也可以

下载之后，解压缩到任意位置

联系方式：18800108022

改造成vue项目：
使用vue脚手架 - vue-cli 来生成vue项目基础模板

通过命令行来确认当前是否安装了vue脚手架
npm -v

vue版本号， 当前最高版本是4.0.4
vue -V

升级vue到最新版本, 需要有网络 且 切换到淘宝源
npm install -g @vue/cli

安装之后：通过 vue -V 查看版本号， 应该是4.0.4

通过最新版本的 vue 脚手架， 来创建项目基础模板
命令行：  vue create 项目名
项目名必须是小写字母， 不允许大写


创建：
1. vue create mypro
2. 选择默认的 （babel，eslint）
3. 选择 NPM
4. 等待...

安装完毕之后，切换到 mypro 文件夹下
cd mypro

运行vue自带的服务器
npm run serve

启动之后， 可以在浏览器通过
localhost:8080 来访问默认的vue项目界面

=======================================
如果你没有安装脚手架程序， 则可以跟项目经理要基础项目模板

解读vue默认项目文件夹的结构
mypro
--node_modules   模块存放位置
--public   入口文件存放位置
----index.html  入口
----favicon.ico  小图标
--src   网站源代码
----assets  资源文件（CSS js 图片 视频 音频）
----components vue的小组件
----App.Vue  vue的入口文件
----main.js  主配置文件
--gitignore   git忽略上传配置文件
--babel.config.js  babel配置
--package.json  项目配置
--package.lock.json  项目配置的备份..
--README.MD  说明


执行流程：
1. npm run serve
执行了 package.json 文件中的 scripts 脚本中设定的serve选项的内容
2. 访问http://localhost:8080 实际上访问的是 index.html文件
即全格式： http://localhost:8080/index.html

此文件中有  <div id="app"></div> 代码
Vue会挂载文件到此标签

观察 src/main.js 这个主文件的代码

ES6中 模块的引入方式， 引入的就是 src/App.vue 文件
import App from './App.vue'

App.vue 文件中,引入了 HelloWorld 组件, 并加载在template中


使用 render 挂载方式, 把引入的App组件进行挂载

$mount('#app'); 挂载到 index.html 中, id="app"的标签上

new Vue({
  render: h => h(App),
}).$mount('#app')


========================
.vue文件内容的标准结构
<template></template>

<script></script>

<style></style>