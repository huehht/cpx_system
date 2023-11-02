<template>
  <div class="app">
    <!-- 头部 -->
    <myHeader></myHeader>
    <el-container style="height: 100vh; 
      border: 1px solid #eee; 
      margin: 0;
      border: 0;
      padding: 0;"> <!-- style： 隐藏滚动条  去掉白边-->
      <!-- 侧边栏 -->
      <el-aside style="width: 200px;">
        <asideNav></asideNav>
      </el-aside>
      <!-- 主页面 -->
      
      <el-main>
        <!-- <AddModel></AddModel> -->
        <!-- <router-view></router-view> -->
        <msgBox></msgBox>
      </el-main>
    </el-container>
  </div>
</template>
 
<script>
import myHeader from "@/components/myHeader";
import asideNav from "@/components/asideNav";
// import AddModel from "@/components/addModel";
import msgBox from "./components/msgDet";



export default {
  name: "App",
  components: {
    myHeader,
    asideNav,
    msgBox,
    // AddModel,
}
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  border: 0;
  padding: 0;
}
  header {
    background: rgb(255, 255, 255);
    width: auto;
    height: 80px;
  }
</style>
