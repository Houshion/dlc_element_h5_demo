<template>
  <div id="OEditor">
    <ueditor ref="getContent"></ueditor>
    <el-button type="success" class="mainBtn" round @click="addSubmit">获取内容</el-button>
  </div>
</template>

<script>
import ueditor from "@/components/ueditor";
export default {
  name: "OEditor",
  components: {
    ueditor
  },
  data() {
    return {};
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    addSubmit() {
      const _this = this;
      console.log(_this.$refs.getContent.content);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
