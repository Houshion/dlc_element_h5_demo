<template>
  <div id="uploadImg">
    <div class="pd-30">
      <p>使用说明：</p>
      <el-collapse accordion>
        <el-collapse-item
          :title="item.title"
          :name="index"
          v-for="(item,index) in useInfo"
          :key="index"
        >
          <div v-for="(i,index) in item.content" :key="index">{{i}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <omg ref="upload" @goUpload="upload" type="single"></omg>
    <el-button type="danger" class="mainBtn" round @click="clearUploadedImage">清空图片</el-button>
  </div>
</template>

<script>
import omg from "@/components/uploadImg";
export default {
  name: "uploadImg",
  data() {
    return {
      useInfo: [
        // 使用说明
        { title: "一.引入文件", content: ["引入 @/components/uploadImg 文件"] },
        {
          title: "二.参数介绍",
          content: [
            "1.type——上传单图:single，上传多图:majority，默认单图",
            "2.方法this.$refs.upload.cleanUpImg()为清空图片",
            "3.goUpload事件，上传动作，回调参数file"
          ]
        }
      ],
      uploadParam: new FormData()
    };
  },

  components: {
    omg
  },

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    clearUploadedImage() {
      const _this = this;
      _this
        .$confirm("确定清空所有图片？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          _this.$refs.upload.cleanUpImg();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    upload(file) {
      const _this = this;
      //重新写一个表单上传的方法
      _this.uploadParam.append("type", 1);
      _this.uploadParam.append("img", file, file.name);
      _this.uploadParam.append("key", "img");

      _this.axios.postImg("_this.url", _this.uploadParam).then(res => {
        _this.option = res.data.data;
      });
    }
  }
};
</script>
<style lang='less' scoped>
</style>
