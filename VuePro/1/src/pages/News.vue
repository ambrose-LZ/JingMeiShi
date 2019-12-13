<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href>首页</a>&gt;
          <a href>公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="news">
        <ul>
          
          <li v-for="item in news.data" :key="item.nid">
            <span>{{item.pubTime|dateFormat}}</span>
            <!-- 注意 to中的 name 对应的是 路由 router.js 中配置项目里的 name 项 -->
            <router-link :to="{name:'NewsDetail', params:{nid:item.nid}}">{{item.title}}</router-link>
            </li>
          
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        <a v-show="curPage>1" @click.prevent="curPage--;getNews()" >上一页</a>
        <!-- pageCount是总页数, 例如4 -->
        <a 
        v-for="index in news.pageCount" :key="index"  
        :class="{cur: index==curPage}"
        @click.prevent="curPage=index;getNews()"
        >
        {{index}}
        </a>
     
        <a v-show="curPage<news.pageCount" @click.prevent="curPage++;getNews()">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",

  data(){
    return {
      news: {},
      curPage: 1 //代表当前页数
    }
  },
  methods:{
    getNews(){
      
      var that = this

      this.axios.post('news_select.php',
      "pageNum="+this.curPage)
      .then(res=>{
        
        console.log(res)

  
        that.news = res.data
      })
      .catch(err=>{
        console.log(err)
      })
    }


  },
  // 监听挂载完毕的时间点
  mounted() {
    // 挂载到网页上以后, 立刻调用方法 获取新闻数据
    // 点击 公司动态, 到控制台查看是否有打印
    // 到控制台 Network中, 刷新页面, 看是否调用了 news_select.php
    this.getNews()
  },
  // 新建一个过滤器, 把时间戳 过滤成 标准日期格式
  filters:{
    // 作用 {{值|过滤器}} 自动把值进行过滤
    dateFormat(val){
      //val参数 就是   val|过滤器
      //14522323232000  val从字符串转成 int
      var time = parseInt(val)

      var date = new Date(time);
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate()

      //拼成  xxx年xx月xx日
      return year + "年" + month + "月" +day +"日";
    }
  }
};
</script>

<style>
</style>

