<!--一个组件多用，添加/编辑弹窗-->
<template>
    <div class="mycontainer">
        <el-form slot="default"  ref="form" :model="form" label-width="100px">
                <el-form-item label="模块名称" prop="modelName" style="width: 90%">
                    <el-input v-model="form.modelName"></el-input>
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
                <!-- <el-form-item label="图标选择" prop="iconChose" style="width: 90%">
                <el-input v-model="form.iconChose"></el-input>
            </el-form-item> -->
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
</style>