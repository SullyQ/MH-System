<template>
    <div class="detail">
        <!-- <span class="title">物料详情页</span>
        <el-divider/> -->
        <el-card>
          <detailSearch />
        </el-card>
        <el-card>
          <detailContent />
        </el-card>
        
    </div>
</template>

<script>
import detailContent from './components/detail-content.vue';
import detailSearch from './components/detail-search.vue';

export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    components: {
    detailContent,
    detailSearch
},

    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

<style lang="less">
.detail {
  overflow: auto;

    .title {
        color: #222;
        font-size: 16.25px;
        font-weight: 600px;

        float: left;
    }

    .el-card {
      margin-bottom: 20px;
    }
}
    
</style>