<template>
    <div class="index-page-con">
        {{message}}
        <a href="cart.html">进入购物车界面</a>
        <button class="btn btn-primary loginStyle" @click="wechatLogin" type="button">微信登录</button>
        <button class="btn btn-info loginStyle" type="button" @click="wechatLogin">qq登录</button>
        <button class="btn btn-danger loginStyle" type="button" @click="wechatLogin">支付宝登录</button>
        <button class="btn btn-success loginStyle" type="button" @click="wechatLogin">微博登录</button>
        <router-link to="/Test">Go to Test</router-link>
        <router-link to="/Test2">Go to Test2</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    props : {
        text : String,
        sos  : String
    },
    created() {
        $(function(){
            alert("123");
        })
    },
    mounted() {
      console.log("this is ",this);
      console.log("this.text is ",this.text);
    },
    data(){
        return {
            message : "index's message in index.vue",
        }
    },
    methods : {
        wechatLogin : function(e){
            console.log("微信登录");
        }
    }
}
</script>
<style lang="less" scoped>
    .loginStyle{
        margin: 10px;
    }
</style>


