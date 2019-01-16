<template>
  <div id="table">
    <div class="pd-10">
      <div class="toolBar mg-b-5 tal">
        <!-- <el-button size="small">
          <router-link :to="{name:'addList'}">添加</router-link>
        </el-button>-->
        <el-button size="small" @click="addRouter">添加</el-button>
      </div>
      <otable
        :tableData="tableData"
        :tableTitle="tableTitle"
        :tableSlot="tableSlot"
        :loading="loading"
        @btnFunc="btnFunc"
        @selecChange="selecChange"
        @switchChange="switchChange"
        @inputChange="inputChange"
        class="wd-100"
      ></otable>
    </div>
  </div>
</template>

<script>
import otable from "@/components/table";
import router from "vue-router";
import { constantRouterMap } from "@/router";
export default {
  name: "table",
  data() {
    return {
      search: "", // 模糊搜索当前页面数据
      loading: true, // 是否加载表格
      tableTitle: [
        { prop: "date", label: "日期", width: "100" },
        { prop: "name", label: "姓名", width: "70" },
        { prop: "province", label: "省份", width: "60" },
        { prop: "city", label: "市区", width: "70" },
        { prop: "address", label: "地址", width: "auto" }
      ], // 表头信息，prop对应
      tableSlot: [
        {
          title: "上下架",
          slotType: "switch",
          width: 80
        },
        {
          title: "数量",
          slotType: "inputNum",
          width: 200
        },
        {
          title: "操作",
          slotType: "btn",
          buttontype: "text", // text为文字按钮，默认不传为正常按钮
          slot: [
            { label: "编辑", type: "edit" },
            { label: "删除", type: "dele" }
          ]
        }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          switch: 0,
          zip: 7
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          switch: 1,
          zip: 6
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          switch: 0,
          zip: 5
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          switch: 0,
          zip: 4
        },
        {
          date: "2016-06-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          switch: 1,
          zip: 3
        },
        {
          date: "2016-07-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          switch: 0,
          zip: 2
        },
        {
          date: "2016-05-21",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          switch: 0,
          zip: 1
        },
        {
          date: "2016-05-31",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          switch: 0,
          zip: 0
        }
      ]
    };
  },

  components: {
    otable
  },

  created() {
    const _this = this;
    _this.tableData.forEach((item, index) => {
      let switchParam = Object.assign({}, item, {
        switch: item.switch == 1 ? true : false
      });
      _this.$set(_this.tableData, index, switchParam);
    });
    _this.addRouter();
  },

  mounted() {
    const _this = this;
    setTimeout(() => {
      _this.loading = false;
    }, 500);
  },
  methods: {
    btnFunc(index, type) {
      const _this = this;
      console.log(index, type);
    },
    selecChange(val) {
      const _this = this;
      let data = [];
      val.forEach(item => {
        data.push(item.date);
      });
      console.log(data);
    },
    switchChange(row, index) {
      console.log("switchChange", row, index);
    },
    inputChange(val) {
      console.log(val);
    },
    // 动态添加路由操作测试
    addRouter() {
      console.log(1);
      let newRoutes = constantRouterMap.concat([
        {
          path: "/addList",
          name: "addList",
          component: resolve => require(["@/ocean_demo/addList"], resolve)
        }
      ]);
      localStorage.setItem(
        "new",
        JSON.stringify({
          path: "/addList",
          name: "addList",
          component: "addList"
        })
      ); //保存路由
      this.$router.addRoutes(newRoutes);
    }
  }
};
</script>
<style lang='less' scoped>
ul.el-pager {
  width: auto;
}
</style>
