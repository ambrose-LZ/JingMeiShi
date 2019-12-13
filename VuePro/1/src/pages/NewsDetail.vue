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
      <div class="news_details">
        <h2>{{news.title}}</h2>
        <span>发布时间：{{news.pubTime|dateFormat}}</span>
        <div class="news_content" v-html="news.content">
         </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NewsDetail",
  data() {
    return {
      news: {}
    };
  },
  methods: {
    getDetail() {
     
      console.log(this.$route);

      var nid = this.$route.params.nid;
      var that = this;

      this.axios
        .post("news_detail.php", "nid=" + nid)
        .then(res => {
          console.log(res);
          that.news = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getDetail();
  },
  // 新建一个过滤器, 把时间戳 过滤成 标准日期格式
  filters: {
    // 作用 {{值|过滤器}} 自动把值进行过滤
    dateFormat(val) {
      //val参数 就是   val|过滤器
      //14522323232000  val从字符串转成 int
      var time = parseInt(val);

      var date = new Date(time);
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();

      //拼成  xxx年xx月xx日
      return year + "年" + month + "月" + day + "日";
    }
  }
};
</script>

<style>
</style>
