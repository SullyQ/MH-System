<template>
  <div >
    <el-descriptions title="结果"></el-descriptions>
    <div style="float: right;">
      <el-button type="text" size="medium" class="u_btn_icon"  icon="el-icon-plus" 
      v-if="isCreate"
      @click="handleNewMaterialClick()">添加</el-button>
      <el-button type="text" size="medium" class="u_btn_icon"  icon="el-icon-upload" @click="">导出</el-button>
    </div>
    <div class="table">
      <el-table :data="material_table" border style="width: 100%">
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
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
        }
      ]
      }
    },
    methods() {
      function handleNewMaterialClick() {
        emit('newClick')
      }
      
    }
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
}
</style>


