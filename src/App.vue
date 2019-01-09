<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import topBar from "./components/topBar";
export default {
  components: {
    topBar
  },
  name: "App",
  data() {
    return {};
  },
  methods: {
    openFrame() {
      console.log(123456789);
    }
  }
};
</script>

<style lang="less" scrope>
@import "../static/css/o_base.css"; /*引入公共样式*/
@import "../static/css/o_style.css"; /*引入公共样式*/
@import "./assets/css/base.css"; /*引入公共样式*/
@import "./assets/css/index.css"; /*引入公共样式*/
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.navBar {
  // height: calc(~"100%");
}

.el-cascader-menu {
  width: 200px !important;
  min-width: 200px !important;
}
</style>
