<template>
   <div>
    <el-row class="tac">
        <el-col :span="12" class="sideNav">
            <h5>自定义导航表格</h5>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">Linux</template>
                    <el-menu-item index="1-1">centOS</el-menu-item>
                    <el-menu-item index="1-2">Ubuntu</el-menu-item>
                    <el-menu-item index="1-2">Redhat</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            </el-menu>
        </el-col>
        <el-table
        :data="tableData"
        style="width: 80%;margin-top:60px;">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
        <i class="el-icon-edit"></i>
        <div>
            <el-alert title="成功!" type="success" center show-icon></el-alert>
        </div>
        <el-button type="primary" size="medium">
            主要按钮
        </el-button>
        <div class="con">
            <div class="item1">测试一</div>
            <div class="item2">测试二</div>
            <div class="item3">测试三</div>
            <div class="item4">测试四</div>
            <div class="item5">测试五</div>
        </div>
        <img src="https://shop.ykplay.com/smallprogram/shopshare_4.png" style="display:none" id="qrImage">
        <canvas id="qrcode-canvas" style="width:600px;height:400px;">

        </canvas>
    </el-row>
   </div>
</template>
<script>
export default {
    props : {

    },
    //全局的data方法
    data(){
        return {
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },
    //组件内部的方法
    methods: {
        
    },
    //组件的计算属性
    computed:{

    },
    //页面已经挂载了
    mounted() {
        //创建canvas上下文
        let canvasContext = document.getElementById('qrcode-canvas');
        console.log("canvas 上下文是：",canvasContext);
        let ctx = canvasContext.getContext('2d');
        let imageTag = document.getElementById("qrImage");
        ctx.drawImage(imageTag,10,10,100,100);
    },
    //渲染方法
    render(){

    }
}
</script>
<style lang="less">
    .sideNav{
        width:20%;
    }
    .con{
        width:10em;
        background: red;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        font-size: 62.5%;
    }
    .item1{
        background: rgb(3, 5, 3);
        flex-shrink: 2;
        border:1px solid #fff;
        font-size: 1em;
    }
    .item2{
        background: yellowgreen;
        flex-shrink: 3;
        border:1px solid #fff;
    }
    .item3{
        background: yellow;
        flex-shrink: 4;
        border:1px solid #fff;
    }
    .item4{
        background: gray;
        flex-shrink: 5;
        border:1px solid #fff;
    }
    .item5{
        background: violet;
        flex-shrink: 6;
        border:1px solid #fff;
    }
</style>

