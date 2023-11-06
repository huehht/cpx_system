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
                            <span>汽车运行模型</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/p1">设计运行模型</el-menu-item>
                            <el-menu-item index="/p2">接入仿真模型</el-menu-item>
                            <el-menu-item index="/p3">完成实物链接装配</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">导出模板</template>
                            <el-menu-item index="1-4-1">模块接口实现</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="">
                        <i class="el-icon-menu"></i>
                        <span slot="title">飞机设计模型</span>
                    </el-menu-item>
                    <el-menu-item index="/pagesOne">
                        <i class="el-icon-document"></i>
                        <span slot="title">无人机模型</span>
                    </el-menu-item>
                    <el-menu-item index="/pagesTwo">
                        <i class="el-icon-setting"></i>
                        <span slot="title">新能源汽车模型</span>
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