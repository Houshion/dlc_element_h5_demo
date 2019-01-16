<template>
  <div id="topBar">
    <div class="bg">
      <img src="../assets/topBar.png" alt>
    </div>
    <div class="flex">
      <el-row class="container">
        <el-col :span="24" class="header">
          <el-col :span="10" class="topLogo logo-width">
            <img src="../assets/logo.png" alt>
          </el-col>
          <el-col :span="14" class="userinfo">
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link userinfo-inner">
                <img :src="userInfo.img">
                {{userInfo.name}}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "topBar",
  props: {
    userInfo: Object,
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.el-dropdown-menu {
  width: auto !important;
  height: auto !important;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  height: 60px;
  color: #ffffff;
}
.flexEnd {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
img {
  display: block;
}
.bg,
.bg img {
  height: 60px;
  max-width: 100%;
}
.mgl15 {
  margin-left: 15px;
}
.mgr15 {
  margin-right: 15px;
}
.csp {
  cursor: pointer;
}
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .dropdown {
        width: auto !important;
        height: auto !important;
      }
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
    .topLogo {
      //width:230px;
      height: 60px;
      font-size: 22px;
      padding: 10px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
      img {
        width: auto;
        float: left;
      }
      .txt {
        color: #fff;
      }
    }
    .logo-width {
      width: 220px;
    }
    .logo-collapse-width {
      width: 60px;
    }
    .tools {
      padding: 0px 23px;
      width: 14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    aside {
      flex: 0 0 230px;
      width: 230px;
      // position: absolute;
      // top: 0px;
      // bottom: 0px;
      .el-menu {
        height: 100%;
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0px;
          left: 60px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-container {
      // background: #f1f2f7;
      flex: 1;
      // position: absolute;
      // right: 0px;
      // top: 0px;
      // bottom: 0px;
      // left: 230px;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>
