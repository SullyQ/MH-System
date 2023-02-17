<template>
  <div >
    <el-descriptions title="结果"></el-descriptions>
    <div style="float: right;">
      <el-button type="text" size="medium" class="u_btn_icon"  icon="el-icon-plus" 
      @click="addMaterial()">添加</el-button>
      <el-button type="text" size="medium" class="u_btn_icon"  icon="el-icon-upload" @click="">导出</el-button>
    </div>
    <div class="table">
      <el-table ref="multiplyTable" :data="material_table" border style="width: 100%" @selection-change="handleSelectionChange" >
        <el-table-column align="center" type="selection" width="70px" />
        <el-table-column align="center" label="物料编码" prop="code" width="220px" />
        <el-table-column align="center" label="物料名称" prop="name" width="220px" />
        <el-table-column align="center" label="物料规格" prop="specification" width="355px" />
        <el-table-column align="center" label="物料类别" prop="category" width="220px" />
        <el-table-column align="center" label="单位" prop="unit" width="220px" />
        <el-table-column
        
         align="center"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="viewMaterial(scope.row)">查看</el-button>
            <el-button type="text" size="small" @click="updateMaterial(scope.row)">修改</el-button>
            <el-button type="text" size="small" @click="deleteMaterial(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>

      <el-button type="primary" icon="el-icon-search" class="btn_enquiry"  @click="enquiryClick()">发布询价</el-button>
    </div>
  </div>

</template>

<script>

  export default {
    data(){
      return {
        material_table:[{
          code:'82X2380013',
          name:'液晶玻璃',
          specification:'23.8寸...',
          category:'OC',
          unit:'PCS'
        },
        {
          code:'82X2380023',
          name:'中框',
          specification:'23.8寸...',
          category:'结构件',
          unit:'PCS'
        }],
        multiplySelection: [],
        dialogVisible: false,  //弹窗隐藏
        dialogTitle: '',  //弹窗名称，add为新增，update为修改
        currentPage: 4
      }
    },
    methods: {
      handleSelectionChange(val){
        this.multiplySelection = val
      },
      enquiryClick(){
        this.$router.push('/DynamicRoutes-1/enquiry-publish/publish')
        this.$bus.$emit('enquirydata',this.multiplySelection);
      },
      addMaterial(){
        this.dialogVisible = true;
        this.dialogTitle = 'add';
        this.$bus.$emit('addData',this.dialogVisible,this.dialogTitle);
      },
      updateMaterial(data){
        this.dialogVisible = true;
        this.dialogTitle = 'update';
        this.$bus.$emit('updateData',this.dialogVisible,this.dialogTitle,data);
      },
      viewMaterial(data){
        this.dialogVisible = true;
        this.dialogTitle = 'view';
        this.$bus.$emit('viewData',this.dialogVisible,this.dialogTitle,data);

      },
      deleteMaterial(){
        
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;

  .title {
    font-size: 22px;
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }

  .btn_enquiry {
    margin-top: 10px;
    height: 40px;
  }
}

.pagination {
  margin-top: 30px;
}
</style>


