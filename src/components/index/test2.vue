<template>
    <div class="container">
        {{message}}
        <router-link to="/Test">ToTest</router-link>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            message : "I'm the page of test2.vue"
        }
    }
}
</script>
<style lang="less" scoped>

</style>


