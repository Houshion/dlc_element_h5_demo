<template>
  <div id="uploadImg" class="pd-10 tal">
    <div class="pd-10">
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
    <omg @goUpload="upload" type="single" :singleImg="singleImg"></omg>
    <omg
      ref="uploadImg"
      @goUpload="upload2"
      @deleteImg="deleteImg"
      type="majority"
      :imgList="imgList"
    ></omg>
    <!-- <el-button type="danger" class="mainBtn" round @click="clearUploadedImage">清空图片</el-button> -->
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
        {
          title: "使用说明",
          content: [
            "参数介绍",
            "1.type——上传单图:single，上传多图:majority，不传默认单图single",
            "2.方法this.$refs.upload.cleanUpImg()为清空图片",
            "3.goUpload事件，上传动作，回调参数file"
          ]
        }
      ],
      uploadParam: "",
      singleImg: "",
      imgList: []
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
    // 重新写一个表单上传的方法
    upload(file) {
      const _this = this;
      // 上传单图头像
      _this.uploadParam = new FormData();
      _this.uploadParam.append("type", 1);
      _this.uploadParam.append("img", file, file.name);
      _this.uploadParam.append("key", "img");

      _this.axios.postImg("dlc/public/upload", _this.uploadParam).then(res => {
        _this.singleImg = res.data.data.savepath;
      });
    },
    // 重新写一个表单上传的方法
    upload2(file) {
      const _this = this;
      // 上传多图照片墙
      _this.uploadParam = new FormData();
      _this.uploadParam.append("type", 1);
      _this.uploadParam.append("img", file, file.name);
      _this.uploadParam.append("key", "img");

      _this.axios.postImg("dlc/public/upload", _this.uploadParam).then(res => {
        // _this.imgList.push({
        //   name: res.data.data.id,
        //   url: res.data.data.savepath
        // });
      });
    },
    /**
     * 清空多图照片墙所有图片
     * 此方法不适用单图头像
     * _this.$refs.uploadImg.cleanUpImg();为核心代码
     */
    clearUploadedImage() {
      const _this = this;
      _this
        .$confirm("确定清空所有图片？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          _this.$refs.uploadImg.cleanUpImg();
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
    deleteImg() {
      console.log("delete");
    }
  }
};
</script>
<style lang='less' scoped>
</style>
