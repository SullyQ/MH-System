<template>
  <div class="info" >
    <el-dialog
      :visible="dialogVisible"
      :title="dialogTitle === 'add' ? '增加物料' : (dialogTitle === 'update'? '修改物料' : '查看物料')"
      width="30%"
      center
      :before-close="handleClose"
    >
      <div class="form">
        <el-form ref="sizeForm" :model="sizeForm" label-width="80px" size="medium">
          <el-form-item label="物料编码">
            <el-input v-model="sizeForm.code" :readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input v-model="sizeForm.name" :readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="物料规格">
            <el-input v-model="sizeForm.specification" :readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="物料类别">
            <el-input v-model="sizeForm.category" :readonly="readonly"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <el-input v-model="sizeForm.unit" :readonly="readonly"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sizeForm:{
          code:'',
          name:'',
          specification:'',
          category:'',
          unit:''
        },
        dialogVisible: false,  //弹窗隐藏
        dialogTitle: '',  //弹窗名称，add为新增，update为修改
        readonly: false
      };
    },
    methods: {
      addMaterial(dialogVisible,dialogTitle) {
         this.dialogVisible = dialogVisible;
         this.dialogTitle = dialogTitle;
         this.readonly = false
      },
      updateMaterial(dialogVisible,dialogTitle,data) {
          this.dialogVisible = dialogVisible;
          this.dialogTitle = dialogTitle;
          this.sizeForm = data;
          this.readonly = false
      },
      viewMaterial(dialogVisible,dialogTitle,data) {
          this.dialogVisible = dialogVisible;
          this.dialogTitle = dialogTitle;
          this.sizeForm = data;
          this.readonly = true;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
        .then(_ => {
          this.dialogVisible =false;
          done();
        })
        .catch(_ => {});
      },
    },
    mounted() {
      this.$bus.$on('addData', this.addMaterial)
      this.$bus.$on('updateData', this.updateMaterial)
      this.$bus.$on('viewData', this.viewMaterial)
    },
    
    beforeDestory(){
      this.bus.$on('addData');
      this.bus.$on('updateData');
      this.bus.$on('viewData');
    }
};
</script>

<style lang="less" scoped>
</style>