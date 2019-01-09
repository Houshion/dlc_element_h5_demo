<template>
  <div id="listBar">
    <div class="bar">
      <div class="name box">案例详情</div>
      <div class="addBtn" v-show="add">
        <el-row>
          <el-button type="success" round>发布</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add: true
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {}
};
</script>
<style lang='less' scoped>
</style>
