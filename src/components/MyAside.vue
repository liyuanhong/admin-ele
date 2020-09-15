<template>
    <div class="my-aside">
        
        
        <el-menu default-active="1" class="el-menu-vertical-demo" style="height:100vh;" :style='{"width": "siderwidth"}' :collapse="isCollapse" :default-openeds="openeds">
            <div style="height:59px;width:200px;text-align:center;border-bottom:1px;border-bottom-style: solid;border-color: gray;box-shadow: 0px 0px 5px grey;" v-if="!isCollapse">
                <img src="/logo.png" style="width:40px;margin-top:8px;margin-left:20px;float:left;">
                <label style="font-size:22px;margin-top:12px;float:left;margin-left:5px;"><b>XX科技</b></label>
            </div>
            <div v-else style="height:59px;text-align:center;width:64px;border-bottom:1px;border-bottom-style: solid;border-color: gray;box-shadow: 0px 0px 5px grey;">
                <img src="/logo.png" style="width:40px;margin-top:8px;margin-left:10px;float:left;">
            </div>
            <el-menu-item index="1" style="text-align:left;" @click="swichItem">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2"  style="text-align:left;">
                <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">展示页</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1-1" @click="swichItem1">展示1</el-menu-item>
                <el-menu-item index="1-2" @click="swichItem2">展示2</el-menu-item>
                <el-menu-item index="1-3">展示3</el-menu-item>
                <el-menu-item index="1-4">展示4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3"  style="text-align:left;">
                <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title1">功能页</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="3-1">功能1</el-menu-item>
                <el-menu-item index="3-2">功能2</el-menu-item>
                <el-menu-item index="3-3">功能3</el-menu-item>
                <el-menu-item index="3-4">功能3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4" disabled style="text-align:left;">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="5" style="text-align:left;">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>        
    </div>
</template>

<script>
import { globalBus } from '../main';

export default {
    name: 'MyAside',
    created() {
        this.handleOpen();
        this.handleClose();
    },
    data() {
        return {
            isCollapse: false,
            siderwidth: "199px",
            openeds: [],
            menuopen: []
        };
    },
    methods: {
        handleOpen() {
           globalBus.$on('siderOpen',()=>{
                 this.isCollapse = true;
                 this.siderwidth = "199px";

           });
        },
        handleClose() {
            globalBus.$on('siderClose',()=>{
               this.isCollapse = false;
               this.siderwidth = "64px";
               this.openeds = this.menuopen;
           });
        },
        swichItem(){
            this.$router.push('/home/home_page');
        },
        swichItem1(){
            this.$router.push('/show/show_page_1');
        },
        swichItem2(){
            this.$router.push('/show/show_page_2');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
