<template>
  <div class="form">
    <el-form ref="sizeform" :model="sizeForm" label-width="80px" size="medium">
      <el-form-item label="物料名称">
        <el-input v-model="sizeForm.name"></el-input>
      </el-form-item>
      <el-form-item label="物料规格">
        <el-input v-model="sizeForm.specification"></el-input>
      </el-form-item>
      <el-form-item label="采购数量">
        <el-input-number v-model="sizeForm.count" label="count" style="width: 100%;"></el-input-number>
      </el-form-item>
      <el-form-item label="交货期">
        <el-date-picker type="date" placeholder="选择交货期" v-model="sizeForm.date" style="width: 100%;" />
      </el-form-item>
      <el-form-item label="送货方式">
        <el-input v-model="sizeForm.way"></el-input>
      </el-form-item>
      <el-form-item label="供应商">
        <el-select v-model="sizeForm.supplier" multiple placeholder="请选择询价的供应商" style="width: 100%;">
          <!-- <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option> -->
          <el-option label="供应商A" value="supplierA"></el-option>
          <el-option label="供应商B" value="supplierB"></el-option>
          <el-option label="供应商C" value="supplierC"></el-option>
      </el-select>

      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">发布询价</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          specification: '',
          count: '',
          date: '',
          way: '',
          supplier: '',
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    mounted() {
      this.$bus.$on('enquirydata', (multiplySelection) => {
        for(let item of multiplySelection){
          this.sizeForm.name = item.name
          this.sizeForm.specification = item.specification
        }
        
      })
    },
    
    beforeDestory(){
      this.bus.$on('enquiryData');
    }
  };
</script>

<style lang="less" scoped>
.form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  .el-form-item {
  
    padding: 15px 25px;
    margin-bottom: 0;
  }

  .el-input-inner {
    width: 232.44px;
  }

}
</style>


