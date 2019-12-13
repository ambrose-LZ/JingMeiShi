<template>
  <div class=" product main container">
  <div class="pl_header">
    <a href="1" class="cur">净美仕净化器</a><a href="2">净美仕滤网</a>
  </div>
  <!-- 产品列表-->
  <ul>
   <li v-for="item in news.data" :key="item.pid">   
    <router-link :to="{path:'/productDetail',query:{pid:item.pid}}"> <img :src="item.pic" alt=""/></router-link> 
      <div class="pdlist_text clearfloat">
        <h3>
          <p>{{item.model}}</p>
         <span>{{item.title2}}</span>
        </h3>
       <router-link :to="{path:'/productDetail',query:{pid:item.pid}}">查看详情 </router-link>
     </div>
    </li>
     </ul>
  <!-- 分页导航-->  
  <div class="pages">
  <a :class="{disabled:pno==0}" @click="change(-1)">上一页</a>  
   <div v-for="index of pcount" :key="index">
     <a :class="index==pno?'cur':''"  v-text="index" @click="changepage(index)"></a>
    </div> 
    <a :class="{disabled:pno==pcount-1}"  @click="change(1)">下一页</a> 
  

  </div>

  </div>
</template>
<script>
export default {
  name: "Product",

  data(){
    return {
      news: {},
     pno:0, 
      pcount:0, 
      
    }
  },
  methods:{
    getNews(){
      var that = this
      this.axios.post('product_select.php', "pageNum="+this.pno)
      .then(res=>{
        console.log(res);
        that.news = res.data;
        that.pcount= res.data.pageSize;
        that.pno= res.data.pageNum;
     
      })
      .catch(err=>{
        console.log(err)
      })
    },
    
    change(n){
    this.pno+=n
       this.getNews();
    },
    
    changepage(index){
      this.pno=index
      this.getNews();
    },



  },
  
  mounted() {
   
    this.getNews()
  },
  
}
</script>

<style>
.product ul{display:flex;flex-wrap:wrap;justify-content:space-between;margin:50px 0;}
.product ul>li{width:300px;border:1px solid #ccc}
.product ul>li img{width:290px;height:290px}
.product .pages {display:flex;justify-content:center;}

</style>

      