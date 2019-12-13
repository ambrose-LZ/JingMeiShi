<template>
  <div id="aa">
    <h1>自定义指令</h1>
      <p v-focus >自定义全局属性123545645456456</p>
      <p v-color >自定义局部属性123545645456456</p>
      <p :style="unameStyleObject">222222222222222</p>
  </div>   
</template>

<script>
export default {
  data(){
    return {
    unameStyleObject: {
        color: 'red',
        'font-size': '2em'
     }
    }
  },
  methods:{
  
    
  },
  mounted() { //挂载完毕后,
    
  },
}
</script>

<style>

</style>
