<template>
  <div id="index">
    <topBar></topBar>
    <!-- Breadcrumb属性为面包屑，不传为卡片tabs -->
    <nav-tab
      :navList="navBar"
      :tabList="navTab"
      :navActive="navActive"
      @removeTab="removeTab"
      @selectNav="select"
      @selectTab="selectTab"
      Breadcrumb
    ></nav-tab>
  </div>
</template>

<script>
import topBar from "../components/topBar";
import navTab from "../components/navTab";
export default {
  name: "index",
  components: {
    topBar,
    navTab
  },
  name: "App",
  data() {
    return {
      navBar: [
        //多级菜单
        {
          parent: { title: "首页", router: "charts" }
        },
        {
          parent: { title: "demo", router: "demo1" },
          children: [
            {
              title: "UEditor编辑器",
              router: "oeditor",
              icon: "el-icon-setting"
            },
            {
              title: "图片上传",
              router: "uploadImg",
              icon: "el-icon-setting"
            },
            {
              title: "表格示例",
              router: "table",
              icon: "el-icon-setting"
            }
          ]
        },
        {
          parent: { title: "demo2", router: "demo2" },
          children: [
            {
              title: "登录",
              router: "loginBox",
              icon: "el-icon-setting"
            }
          ]
        }
      ],
      navActive: "charts",
      navTab: []
    };
  },
  created() {
    const _this = this;
    _this.$router.push({ name: "charts" });
  },
  methods: {
    // 选择nav菜单
    select(index) {
      const _this = this;
      let has = false;
      let title;
      _this.navActive = index;
      _this.navTab.forEach(item => {
        if (item.name == index) {
          has = true;
        }
      });
      _this.navBar.forEach(item => {
        if (item.children) {
          item.children.forEach(i => {
            if (i.router == index) {
              title = i.title;
              if (!has) {
                _this.navTab.push({ title: title, name: index });
              }
            }
          });
        }
      });
    },
    // 关闭当前tab
    removeTab(targetName) {
      let tabs = this.navTab;
      let activeName = this.navActive;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.navActive = activeName;
      this.navTab = tabs.filter(tab => tab.name !== targetName);
    },
    // 点击tab菜单切换
    selectTab(index) {
      console.log(index.name);
      this.$router.push({
        name: index.name
      });
    }
  }
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

// .main {
//   width: calc(~"100% - 200px");
//   overflow: scroll;
// }
</style>
