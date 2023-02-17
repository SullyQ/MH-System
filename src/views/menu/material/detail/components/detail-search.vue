<template>
  <div class="search">
    <el-descriptions title="查询"></el-descriptions>
    <el-form :inline="true" :model="formInline">
      <el-row :gutter="20">
          <el-col :sm="24" :md="10" :lg="10">
            <el-form-item label="物料编码">
              <el-input v-model="formInline.code" placeholder="" style="width: 180%" clearable></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="24" :md="10" :lg="10">
            <el-form-item label="物料名称">
              <el-input v-model="formInline.name" placeholder="" style="width: 180%" clearable></el-input>
            </el-form-item>
          </el-col>

          <el-col :sm="24" :md="10" :lg="10">
            <el-form-item label="物料类别">
              <el-input v-model="formInline.category" placeholder="" style="width: 180%" clearable></el-input>
            </el-form-item>
          </el-col>
      </el-row>
    </el-form>

    <div class="btns" style="float: right;">
        <el-button icon="el-icon-refresh" @click="handleResetClick">重置</el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleResetClick(){
      
    },
    handleQueryClick(){

    }
  }
}

</script>

<style lang="less">
.search {
  // background-color: #fff;
  // padding: 20px;
  // margin-bottom: 20px;

  .el-form-item {
  
    padding: 10px 5px;
    margin-bottom: 0;
  }

  .btns {
    text-align: right;
    padding: 0 0 20px 0px;
  }
}
  
</style>