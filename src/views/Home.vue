<template>
  <el-container>

    <el-aside  :style='{"height":"100%","width":"siderWidth"}'>
      <MyAside></MyAside>
    </el-aside>
    <el-container style="height: 100vh;overflow-y: scroll;">
      <el-header style="z-index:100;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: gray;box-shadow: 0px 0px 10px grey;padding:0px;">
        <MyHeader></MyHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import MyAside from "../components/MyAside"
import MyHeader from "../components/MyHeader"

export default {
  name: 'Home',
  data() {
    return {
        siderWidthOut: "200px"
    };
  },
  components: {
    MyAside,
    MyHeader
  }
}
</script>
