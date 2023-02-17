<template>
    <div class="detail">
        <el-card>
          <detailSearch />
        </el-card>
        <el-card>
          <detailContent />
        </el-card>
        <detailInfo />
    </div>
</template>

<script>
import detailContent from './components/detail-content.vue';
import detailSearch from './components/detail-search.vue';
import detailInfo from './components/detail-info.vue'

export default {
    data() {
      return {
        
      }
    },
    components: {
      detailContent,
      detailSearch,
      detailInfo
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