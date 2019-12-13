<template>
  <div id="app">
    <Header/>
    <!-- <Index /> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// 此处注意 Index.vue 在 pages 文件夹下
// import Index from './pages/Index.vue'

// router不是 export defalut 导出的, 必须带{}包围
import { router } from './routes/router.js'

//观察超链接:  结尾是 #/  
//这个 / 就是 router.js 中写的 path:"/"
export default {
  name: 'app',
  // router: router, //键router是固定的
  router, //简写方式:  键和值 名字一样, 可以简写
  components: {
    Header, Footer
  }
}
</script>

<style>
@import "./assets/css/common.css";
@import "./assets/css/mycss.css";
</style>
