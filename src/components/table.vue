<template>
  <div id="otable">
    <el-input placeholder="请输入内容" v-model="search">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-table
      class="border mg-t-5"
      ref="otable"
      :data="tables"
      style="width: 100%;overflow:scroll"
      @selection-change="selecChange"
      tooltip-effect="dark"
      :show-overflow-tooltip="true"
      v-loading="loading"
    >
      <el-table-column type="selection" width="55" v-if="select"></el-table-column>
      <el-table-column
        v-for="(item,index) in tableTitle"
        :key="item.date"
        :fixed="index==0?true:false"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        v-for="(itemSlot,indexSlot) in tableSlot"
        :key="indexSlot"
        :label="itemSlot.title"
        show-overflow-tooltip
        :width="itemSlot.width?itemSlot.width:'auto'"
      >
        <template slot-scope="scope">
          <div class="typeButton" v-if="itemSlot.slotType=='btn'">
            <el-button
              v-for="i in itemSlot.slot"
              :key="i.title"
              @click="btnType(scope.$index, i.type)"
              :type="itemSlot.buttontype"
              size="small"
            >{{i.label}}</el-button>
          </div>
          <div class="typeSwitch" v-else-if="itemSlot.slotType=='switch'">
            <el-switch
              v-model="scope.row.switch"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="switchChange(scope.row,scope.$index)"
            ></el-switch>
          </div>
          <div class="typeSwitch" v-else-if="itemSlot.slotType=='inputNum'">
            <el-input-number
              v-model="scope.row.zip"
              @change="inputChange"
              size="mini"
              :min="0"
              :max="9999999"
              label="描述文字"
            ></el-input-number>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      style="width:auto"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "otable",
  props: {
    tableData: Array,
    tableTitle: Array,
    tableSlot: Array,
    select: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      search: "",
      page: 1,
      dataLen: this.tableData.length,
      multipleSelection: []
    };
  },

  components: {},

  computed: {
    // 模糊搜索
    tables() {
      const search = this.search;
      if (search) {
        return this.tableData.filter(data => {
          return Object.keys(data).some(key => {
            return (
              String(data[key])
                .toLowerCase()
                .indexOf(search) > -1
            );
          });
        });
      }
      return this.tableData;
    }
  },

  created() {
    const _this = this;
    console.log(_this.dataLen);
  },

  mounted() {
    const _this = this;
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    btnType(index, type) {
      this.$emit("btnFunc", index, type);
    },
    selecChange(val) {
      this.$emit("selecChange", val);
    },
    switchChange(row, index) {
      this.$emit("switchChange", row, index);
    },
    inputChange(value) {
      this.$emit("inputChange", value);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang='less' scoped>
ul.el-pager {
  width: auto;
}
</style>
