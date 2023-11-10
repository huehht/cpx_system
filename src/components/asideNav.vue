<template>
    <div class="aside" style="height: 100%; width: 100%;">
        <el-row class="tac" style="height: 100%; width: 100%;">
            <el-col :span="12" style="height: 100%; width: 100%;">
                <el-menu default-active="this.$route.path" router class="el-menu-vertical-demo" @open="handleOpen"
                    @close="handleClose" 
                    style="height: 100%; width: 100%;">
                    <el-submenu index="/pagesOne">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>汽车设计模型</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item icon="el-icon-devops-menu-ctrller" index="/p1">仪表盘</el-menu-item>
                            <el-menu-item icon="el-icon-devops-engine" index="/p2">发动机</el-menu-item>
                            <el-menu-item icon="el-icon-devops-transmission" index="/p3">变速器</el-menu-item>
                            <el-menu-item icon="el-icon-devops-fuel" index="/p4">油箱</el-menu-item>
                            <el-menu-item icon="el-icon-devops-wheel" index="/p5">车轮</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="">
                        <i class="el-icon-menu"></i>
                        <span slot="title">飞机设计模型</span>
                    </el-menu-item>
                    <el-menu-item index="/pagesOne">
                        <i class="el-icon-document"></i>
                        <span slot="title">火箭设计模型</span>
                    </el-menu-item>
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

</style>