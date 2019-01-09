<template>
  <div id="index">
    <topBar></topBar>
    <el-container class="navBar tal" style="min-height:100%;height:100%">
      <nav-tab
        :navList="navBar"
        :tabList="navTab"
        :navActive="navActive"
        @removeTab="removeTab"
        @selectNav="select"
        @selectTab="selectTab"
        tabNone="这是没有选项的时候的展示页"
      ></nav-tab>
    </el-container>
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
          parent: { title: "demo", router: "index" },
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
              title: "登录",
              router: "loginBox",
              icon: "el-icon-setting"
            }
          ]
        }
      ],
      navActive: "",
      navTab: [],
      a: 123
    };
  },
  created() {
    const _this = this;
  },
  methods: {
    // 选择nav菜单
    select(index) {
      const _this = this;
      let has = false;
      _this.navActive = index;
      _this.navTab.forEach(item => {
        if (item.name == index) {
          has = true;
        }
      });
      if (!has) {
        _this.navTab.push({ title: index, name: index });
      }
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

.main {
  width: calc(~"100% - 200px");
  overflow: scroll;
}
</style>
