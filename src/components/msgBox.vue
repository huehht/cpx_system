<!--一个组件多用，添加/编辑弹窗-->
<template>
    <div class="mycontainer">
        <el-tabs v-model="activeName" >
        <el-tab-pane label="模块信息配置" name="first"></el-tab-pane>
        <el-tab-pane label="仿真模型导入" name="second"></el-tab-pane>
        <el-tab-pane label="实物装配链接" name="third"></el-tab-pane>
      </el-tabs>
        <el-form slot="default"  ref="form" :model="form" label-width="100px">
                <el-form-item label="模块名称" prop="modelName" style="width: 90%">
                    <el-input v-model="form.modelName"></el-input>
                </el-form-item>
                <el-form-item label="图标选择" prop="iconChose" style="width: 90%">
                     <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="输出接口数量" prop="modelOutNum" style="width: 90%">
                    <el-input-number type="textarea" @change="handleChange" :min="1" :max="10" v-model="form.modelOutNum"></el-input-number>
                </el-form-item>
                <el-form-item label="输入接口数量" prop="modelInNum" style="width: 90%">
                    <el-input-number type="textarea" @change="handleChange" :min="1" :max="10" v-model="form.modelInNum"></el-input-number>
                </el-form-item>
                <el-form-item label="接口规则设置" prop="implementRule" style="width: 90%">
                    <el-input v-model="form.implementRule"></el-input>
                </el-form-item>
                <el-form-item label="选择接入方式" prop="implementRule" style="width: 90%">
                    <el-radio-group v-model="radio">
                        <el-radio :label="3">系统模型生成</el-radio>
                        <el-radio :label="6">仿真模型导入</el-radio>
                        <el-radio :label="9">实物装配链接</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
    </div>
</template>
 
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            form: {
                modelName: "",
                modelInNum: 0,
                modelOutNum: "",
                implementRule: "",
            },
            options: [{
                value: '选项1',
                label: '图标1'
            }, {
                value: '选项2',
                label: '图标2'
            }, {
                value: '选项3',
                label: '图标3'
            }, {
                value: '选项4',
                label: '图标4'
            }, {
                value: '选项5',
                label: '图标5'
            }],
            value: '',
            radio:3
        }
    },
    methods: {

    },
}
</script>
<style>
.mycontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around
}
.el-form {
    font-size: 5px;
}
</style>