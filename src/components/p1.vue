<template >
  <div>
  <el-row>
    <el-col :span="4" :offset="20">
    <el-button icon="el-icon-devops-modular" style="width:100%;margin-bottom:15px;">	
      新增组件
    </el-button>
    </el-col>
  </el-row>
  <el-row>
      <el-col :span="4" :offset="20">
      <el-button icon="el-icon-devops-interface" style="width:100%;margin-bottom:15px;">	
        新增输入接口
      </el-button>
      </el-col>
    </el-row>
     <el-row>
        <el-col :span="4" :offset="20">
        <el-button icon="el-icon-devops-controller" style="width:100%;margin-bottom:15px;">	
          新增输出接口
        </el-button>
        </el-col>
      </el-row>
    <el-row>
        <el-col :span="4" :offset="20">
          <el-collapse>
        <el-collapse-item>
          <span class="collapse-title" slot="title">组件库</span>
          <el-col>
          <el-button icon="el-icon-devops-menu-ctrller" style="width:100%;margin-bottom:15px;">	
          仪表盘
        </el-button>
        </el-col>
        <el-col>
        <el-button icon="el-icon-devops-engine" style="width:100%;margin-bottom:15px;">	
            发动机
          </el-button>
          </el-col>
          <el-col>
          <el-button icon="el-icon-devops-fuel" style="width:100%;margin-bottom:15px;">	
              油箱
            </el-button>
            </el-col>
            <el-col>
          <el-button icon="el-icon-devops-transmission" style="width:100%;margin-bottom:15px;">	
              变速器
            </el-button>
            </el-col>
            <el-col>
          <el-button icon="el-icon-devops-wheel" style="width:100%;margin-bottom:15px;">	
              车轮
            </el-button>
            </el-col>
      </el-collapse-item>
      </el-collapse>
        </el-col>
      </el-row>
    </div>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  /* ::v-deep .collapse-title {
  flex: 1 0 90%;
  order: 1;
  .el-collapse-item__header {
    flex: 1 0 auto;
    order: -1;
  }
} */
  </style>


