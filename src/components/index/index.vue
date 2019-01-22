<template>
    <div class="index-page-con">
        {{message}}
        <a href="cart.html">进入购物车界面</a>
    </div>
</template>
<script>
export default {
    props : {
        text : String,
        sos  : String
    },
    created() {
        
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
        
    }
}
</script>
<style lang="less" scoped>

</style>


