import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入axios 和 vue-axios 的固定操作写法:
import axios from 'axios'
import VueAxios from "vue-axios"

Vue.use(VueAxios, axios)

//默认配置: 例如 服务器的根目录
// http://www.codeboy.com/mfresh/data/news_select.php
Vue.axios.defaults.baseURL = "http://www.codeboy.com/mfresh/data/"
//目前涉及一个跨域问题: 本地是 localhost:8080
//但是访问的是 www.codeboy.com ,属于跨域操作
Vue.axios.defaults.headers = {"content-type":"application/x-www-form-urlencoded"}


Vue.directive('focus',{
  inserted(el) {
    el.innerHTML='ss'
   console.log(el.innerHTML)
  },

  // bind: function(el){ // 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次

  // },
  // inserted: function(el){ // inserted 表示元素插入到DOM中的时候，会执行inserted函数【触发一次】
  //     el.focus()
  // },
  // updated: function(el) { // 当VNode更新的时候，会执行updated，可能会触发多次
      
  // }

})


new Vue({
  render: h => h(App),
}).$mount('#app')
