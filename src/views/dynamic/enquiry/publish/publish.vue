<template>
  <div class="enquiry">
    <el-descriptions title="发布询价"></el-descriptions>
    <el-card>
        <enquiryForm />
    </el-card>
  </div>
</template>

<script>
import enquiryForm from './components/enquiry-form.vue';

export default {
  data() {
    return {
      }
  },
  components: {
      enquiryForm
  },

  methods: {
  }
}
</script>

<style lang="less" scoped>
.enquiry {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .el-card {
    width: 500px;
  }
}
</style>