<template>
    <el-dialog :title="title" :visible.sync="visible" width="1000px" @close="close">
        <el-form slot="default" :rules="rules" ref="form" :model="form" label-width="100px">
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
        <span slot="footer" class="dialog-footer">
            <el-button @click="sureData" type="primary">添 加</el-button>
        </span>
    </el-dialog>
</template>
<script>
// import { addEvent, geturl } from "@/api/event";
// import { update, getGridView, add, getTypeIndex } from "@/api/offer/Conference.js";

export default {
    created() {
        this.getTypeIndexFn()
    },
    components: {
    },
    props: {
        type: {
            type: String,
            default: "2",
        },
        pid: {
            type: String,
            default: "",
        }
    },
    data() {
        return {
            rules: {
                },
            visible: false,
            title: "新增",
            form: {
                modelName: "",
                modelInNum: 0,
                modelOutNum: "",
                implementRule: "",
            },
            myOptions: [],
        };
    },
    methods: {
        async getTypeIndexFn() {
            try {
                const res = await getTypeIndex({ conttentType: 2 })
                this.myOptions = res.data.children

            } catch (error) {
                console.error(error);
            }
        },
        async init() {
            this.visible = true;
        },
        /**
         * 点击 关联信息-地址 定位时
         */
        async sureData() {
            this.$refs.form.validate()
            let options = {
                remark: this.form.remark[this.form.remark.length - 1],//	台账类型编码
                typemodule: this.type,//2-专题 1-网格
                pid: this.pid,//组织编码id
                longitude: this.form.longitude,//	经度
                latitude: this.form.latitude,//纬度
                attachments: this.form.baseFile === undefined ? "" : JSON.stringify(this.form.baseFile.map((e) => e.basefile)),//附件
                workAddress: this.form.workAddress,//标题
                workContent: this.form.workContent,//	正文内容
            };
            this.$refs.form.validate(async (valid) => {
                if (valid) {
                    try {
                        let data = await add(options);
                        if (data.code == 200) {
                            this.$emit("update");
                            this.close();
                            this.$message.success("添加成功");
                        }
                    } catch (error) { }
                }
            });
        },
        close() {
            this.visible = false;
            this.form= {
                modelName: "",
                modelInNum: 0,
                modelOutNum: "",
                implementRule: "",
            };
        },
    },
};
</script>
<style lang="scss" scoped>
:deep(.el-form-item__content) {
    font-size: 16px;
}

:deep(.el-form-item__label) {
    font-size: 14px;
}

:deep(.el-form-item) {
    margin-bottom: 14px !important;
    font-weight: 400;
    color: black;
}
</style>
