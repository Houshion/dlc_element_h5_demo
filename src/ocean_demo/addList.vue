<template>
  <div id="addList">
    <div class="tal">
      <el-button icon="el-icon-back">返回</el-button>
    </div>
    <addData></addData>
  </div>
</template>

<script>
import addData from "@/components/addData";
export default {
  name: "addList",
  data() {
    return {};
  },

  components: {
    addData
  },

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
