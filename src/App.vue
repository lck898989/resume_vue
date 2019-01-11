<template>
  <div id="app">
    <v-head></v-head>
  </div>
</template>

<script>
import Head from '@/components/head.vue'
export default {
  name: 'App',
  components : {
    "v-head" : Head
  },
  created(){
    console.log("app.vue was created");
    console.log("head is ",Head);
    
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
