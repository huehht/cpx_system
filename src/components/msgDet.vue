<template>
    <div class="mycontainer">
        <div>
            <h2>活动管理</h2>
            <el-divider></el-divider>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="活动名称">
                    <el-input size="mini" v-model="formInline.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="onQuery" icon="el-icon-search" size="mini" type="primary">查询</el-button>
                    <el-button @click="onQuery" icon="el-icon-refresh" size="mini" type="danger">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-button icon="el-icon-plus" @click="openWindow" size="mini">添加</el-button>
            <el-dialog title="模块编辑" :visible.sync="windowVisible" append-to-body>
                <ActivityWindow v-if="windowVisible" ref="popWindow"></ActivityWindow>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmit">确认</el-button>
                    <el-button @click="windowVisible = false">取消</el-button>
                </span>
            </el-dialog>
        </div>
        <div>
            <el-divider></el-divider>
            <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column label="活动名称" prop="name">
                </el-table-column>
                <el-table-column label="活动区域" prop="region"></el-table-column>
                <el-table-column label="日期" prop="date1"></el-table-column>
                <el-table-column label="时间" prop="date2"></el-table-column>
                <el-table-column label="是否推广" prop="isAdvertise" :formatter="formatAdvertise"></el-table-column>
                <el-table-column label="即时配送" prop="delivery">
                    <template slot-scope="scope">
                        <el-switch style="display: block;" v-model="scope.row.delivery" active-text="是" inactive-text="否">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="活动性质" prop="type"></el-table-column>
                <el-table-column label="特殊资源" prop="resource"></el-table-column>
                <el-table-column label="活动形式" prop="desc"></el-table-column>
                <el-table-column align="center" label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit"
                            size="mini">编辑</el-button>
                        <el-button @click="handleDelete(scope.$index, scope.row)" icon="el-icon-delete"
                            size="mini">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
 
<script>
import ActivityWindow from "@/components/msgBox";
export default {
    name: 'User',
    components: {
        ActivityWindow
    },
    data() {
        return {
            windowVisible: false,
            formInline: {
                name: ''
            },
            tableData: [{
                name: '活动名称1',
                region: '区域一',
                date1: '2020-08-09',
                date2: '11:40:00',
                isAdvertise: '1',
                delivery: false,
                type: ['地推活动', '线下主题活动'],
                resource: '线下场地免费',
                desc: '这是一个很好的活动'
            },
            {
                name: '活动名称2',
                region: '区域二',
                date1: '2020-07-09',
                date2: '12:00:00',
                isAdvertise: '0',
                delivery: true,
                type: ['美食/餐厅线上活动', '单纯品牌曝光'],
                resource: '线上品牌商赞助',
                desc: '这是一个很不好的活动'
            },
            {
                name: '活动名称3',
                region: '区域一',
                date1: '2020-09-09',
                date2: '11:43:13',
                isAdvertise: '0',
                delivery: true,
                type: ['美食/餐厅线上活动', '线下主题活动', '单纯品牌曝光'],
                resource: '线上品牌商赞助',
                desc: '这是一个ok的活动'
            }
            ]
        }
    },
    methods: {
        formatAdvertise(row) {
            return row.isAdvertise === '1' ? '是' : row.isAdvertise === '0' ? '否' : '未知'
        },
        openWindow() {
            this.windowVisible = true;
        },
        handleEdit(index, row) {
            this.windowVisible = true;
        },
        onQuery() {

        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        onSubmit() {

        }
    },
}
</script>
<style>
.mycontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around
}
</style>