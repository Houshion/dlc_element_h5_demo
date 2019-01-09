<template>
  <div id="Oeditor">
    <vue-ueditor-wrap
      ref="ueditor"
      v-model="content"
      :destroy="true"
      :config="config"
      @ready="ready"
    ></vue-ueditor-wrap>
  </div>
</template>

<script>
export default {
  name: "ueditor",
  data() {
    return {
      content: "",
      config: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 300,
        // 初始容器宽度
        initialFrameWidth: "100%",
        UEDITOR_HOME_URL: "/static/ueditor/"
      }
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    ready(editorInstance) {
      this.ueditorId = `${editorInstance.key}`;
      console.log(`实例${editorInstance.key}已经初始化:`, editorInstance);
    },
    addSubmit() {
      console.log(this.content);
    }
  }
};
</script>
<style lang='less' scoped>
</style>
