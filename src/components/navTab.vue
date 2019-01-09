<template>
  <div id="nav" class="flex flexWrap">
    <el-aside :width="width?width+'px':'200px'" style="background-color: #2a3542">
      <el-menu
        :default-active="avtive"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
        @select="select"
      >
        <el-submenu v-for="(item,index) in navList" :key="index" :index="item.parent.router">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.parent.title}}</span>
          </template>
          <el-menu-item :index="child.router" v-for="(child,index) in item.children" :key="index">
            <i :class="child.icon" v-if="child.icon"></i>
            {{child.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <div class="main">
      <div v-if="tabList.length<=0">{{tabNone}}</div>
      <el-tabs
        v-else
        v-model="avtive"
        type="card"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "nav",
  props: ["navList", "width", "tabList", "tabNone", "navActive"],
  data() {
    return {
      avtive: ""
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  watch: {
    navActive: function() {
      const _this = this;
      return (_this.avtive = _this.navActive);
    }
  },

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
}

.main {
  width: calc(~"100% - 200px");
  overflow: scroll;
}
</style>
