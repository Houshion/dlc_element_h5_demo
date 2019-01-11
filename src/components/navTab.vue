<template>
  <div id="nav" class="flex flexWrap">
    <el-container style="min-height:100%;height:100%; border: 1px solid #eee">
      <el-aside class="tal" style="background-color: #2a3542;max-width:220px">
        <el-menu
          :default-active="avtive"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
          @select="select"
        >
          <div class="submenu" v-for="(item,index) in navList" :key="index">
            <el-submenu :index="item.parent.router" v-if="item.children">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.parent.title}}</span>
              </template>
              <el-menu-item
                :index="child.router"
                v-for="(child,index) in item.children"
                :key="index"
              >
                <i :class="child.icon" v-if="child.icon"></i>
                {{child.title}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="item.parent.router" v-else>
              <i class="el-icon-setting"></i>
              <span slot="title">{{item.parent.title}}</span>
            </el-menu-item>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <div class="break wd-100" v-if="Breadcrumb">
          <el-header class="border-b pd-20" style="background:#ffffff">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item class="fontb">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item,index) in activeName" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-header>
          <el-main>
            <router-view/>
          </el-main>
        </div>
        <div class="tabs wd-100" v-else>
          <div class="mainIndex" v-if="avtive=='charts' || avtive==0">
            <router-view/>
          </div>
          <el-main v-else>
            <el-tabs
              v-model="avtive"
              type="border-card"
              closable
              @tab-remove="removeTab"
              @tab-click="selectTab"
            >
              <el-tab-pane
                :key="index"
                v-for="(item, index) in tabList"
                :label="item.title"
                :name="item.name"
              >
                <router-view/>
              </el-tab-pane>
            </el-tabs>
          </el-main>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "nav",
  // props: ["navList", "tabList", "tabNone", "navActive"],
  props: {
    navList: Array,
    tabList: Array,
    tabNone: String, // 暂定
    navActive: {
      type: String,
      default: ""
    },
    Breadcrumb: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      avtive: this.navActive,
      activeName: []
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  watch: {
    navActive: function() {
      const _this = this;
      _this.avtive = _this.navActive;
      _this.activeName = [];
      _this.navList.forEach(item1 => {
        if (item1.children) {
          item1.children.forEach(item2 => {
            if (_this.navActive == item2.router) {
              _this.activeName.push(item1.parent.title);
              _this.activeName.push(item2.title);
            }
          });
        }
      });
    }
  },

  // computed: {
  //   activeName: function() {
  //     const _this = this;
  //     return _this.avtive;
  //   }
  // },

  mounted() {
    const _this = this;
  },
  methods: {
    select(index) {
      this.$emit("selectNav", index);
    },
    removeTab(tag) {
      this.$emit("removeTab", tag);
    },
    selectTab(index) {
      this.$emit("selectTab", index);
    }
  }
};
</script>
<style lang='less' scoped>
#nav {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  background: #ffffff;
}
.el-tabs--border-card {
  height: calc(~"100% - 80px");
}
</style>
