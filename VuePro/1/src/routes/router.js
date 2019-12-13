//以下都是固定写法: 引入模块, 把VueRouter关联到Vue上
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

//自定义的代码:
//1.引入vue的组件, 要添加在路由上的内容
import Index from '../pages/Index.vue'
import About from '../pages/About.vue'
import Contact from "../pages/Contact.vue"
import News from "../pages/News.vue"
import NewsDetail from "../pages/NewsDetail.vue"
import Register from "../pages/Register.vue"
import Text from "../pages/Text.vue"
import Product from "../pages/Product.vue"
import ProductDetail from "../pages/productDetail.vue"


export const router = new VueRouter({
  routes: [
    {
      // / 就代表根目录, vue默认的router-link是 #/
      path: "/",
      component: Index,
      name: "index"
    },{
      // 点击 关于净美仕, url地址会多一个 #/about
      path: "/about",
      component: About
    },{
      path: "/contact",
      component: Contact
    },{
      path: "/news",
      component: News
    },
    {
      path: "/newsDetail",
      component: NewsDetail,
      // 此name 和 routerlink中的 name 配置使用
      name : "NewsDetail"
    },{
      name:"register",
      path: "/register",
      component: Register
    },{
      path: "/aa",
      component: Text,
    },{
      path: "/product",
      component: Product,
    },{
      path: "/productDetail",
      component: ProductDetail,
    }
  ]
})