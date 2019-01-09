<template>
  <div id="index">
    <topBar></topBar>
    <el-container class="navBar flex flexBetween tal" style="min-height:100%;height:100%">
      <el-aside width="200px" style="background-color: #2a3542">
        <el-menu
          default-active="loginBox"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item index="loginBox">
            <i class="el-icon-setting"></i>登录
          </el-menu-item>
          <el-submenu index="oeditor">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>demo</span>
            </template>
            <el-menu-item index="oeditor">
              <i class="el-icon-setting"></i>UEditor编辑器
            </el-menu-item>
            <el-menu-item index="uploadImg">
              <i class="el-icon-setting"></i>单图片上传
            </el-menu-item>
            <el-menu-item index="oeditor">
              <i class="el-icon-setting"></i>UEditor编辑器
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <div class="main">
        <router-view/>
      </div>
    </el-container>
  </div>
</template>

<script>
import topBar from "../components/topBar";
export default {
  name: "index",
  components: {
    topBar
  },
  name: "App",
  data() {
    return {};
  },
  created() {
    const _this = this;
    _this.$router.push({
      name: "uploadImg"
    });
  },
  methods: {}
};
</script>
<style lang='less' scoped>
@import "../../static/css/o_base.css"; /*引入公共样式*/
@import "../../static/css/o_style.css"; /*引入公共样式*/
@import "../assets/css/base.css"; /*引入公共样式*/
@import "../assets/css/index.css"; /*引入公共样式*/
html,
body,
#index {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.main {
  width: calc(~"100% - 200px");
  overflow: scroll;
}
</style>
