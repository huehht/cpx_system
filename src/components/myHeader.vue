<template>
    <div class="aside" style="height: 100%; width: 100%;">
        <el-row class="tac" style="height: 100%; width: 100%;">
            <el-col :span="12" style="height: 100%; width: 100%;">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
      <el-menu-item index="1">新建产品</el-menu-item>
      <el-submenu index="2">
        <template slot="title">模块编辑</template>
        <el-menu-item index="2-1">撤回</el-menu-item>
        <el-menu-item index="2-2">修改</el-menu-item>
        <el-menu-item index="2-3">接入模型</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">新增</template>
          <el-menu-item index="2-4-1">整体模块</el-menu-item>
          <el-menu-item index="2-4-2">接口</el-menu-item>
          <el-menu-item index="2-4-3">数据流</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">导出产品模型并保存</el-menu-item>
      <el-menu-item index="4">导入本地模型</el-menu-item>
      <el-menu-item index="5">编译</el-menu-item>
      <el-menu-item index="6">链接并导出运行系统</el-menu-item>
    </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style>
.el-menu-demo {
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    text-align: center;
}

</style>