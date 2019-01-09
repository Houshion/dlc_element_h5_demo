<template>
  <div id="certificate">
    <div id="listBar">
      <div class="bar">
        <div class="name box">资质证书</div>
      </div>
    </div>
    <div class="form">
      <div class="name mg-t-10">
        <el-row>
          <el-col :span="3" height>
            <label>
              <span class="cred">*</span>获得时间
            </label>
          </el-col>
          <el-col :span="4">
            <el-date-picker
              v-model="certificateParam.cert_time"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
            ></el-date-picker>
          </el-col>
        </el-row>
      </div>
      <div class="about mg-t-10">
        <el-row>
          <el-col :span="3" height>
            <label>
              <span class="cred">*</span>证书名称
            </label>
          </el-col>
          <el-col :span="21">
            <el-input v-model="certificateParam.cert_name" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="bgImg mg-t-10">
        <el-row>
          <el-col :span="3" height>
            <label>
              <span class="cred">*</span>上传封面
            </label>
          </el-col>
          <el-col :span="10">
            <el-upload
              class="avatar-uploader"
              action="customize"
              :show-file-list="false"
              :before-upload="beforeuploadImg"
            >
              <img v-if="logoImg" :src="logoImg" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
        </el-row>
      </div>
      <div class="submit tac mg-t-50">
        <el-button type="success" class="mainBtn" round @click="saveBtn">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "certificate",
  data() {
    return {
      logoImg: "",
      certificateParam: {
        cert_name: "",
        cert_time: "",
        cert_pic_id: ""
      },
      imgParam: "" //表单要提交的参数
    };
  },

  components: {},

  created() {
    const _this = this;
    _this.axios.post("shop/Business/getBusinessCertificate", {}).then(res => {
      console.log(res);
      if (res.data.code == 1000) return _this.$router.push({ name: "login" });
      if (res.data.code == 1) {
        _this.certificateParam = res.data.data;
        _this.logoImg = res.data.data.cert_pic;
        // });
      }
    });
  },

  mounted() {
    const _this = this;
  },
  methods: {
    beforeuploadImg(file) {
      const _this = this;
      console.log(file);
      //创建临时的路径来展示图片
      var windowURL = window.URL || window.webkitURL;

      _this.logoImg = windowURL.createObjectURL(file);

      //重新写一个表单上传的方法
      _this.imgParam = new FormData();
      _this.imgParam.append("type", 1);
      _this.imgParam.append("img", file, file.name);
      _this.imgParam.append("key", "img");
      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      axios
        .post(
          "http://wmwl.app.xiaozhuschool.com/dlc/public/upload",
          _this.imgParam,
          config
        )
        .then(res => {
          console.log(res);
          if (res.data.code == 1000)
            return _this.$router.push({ name: "login" });
          if (res.data.code != 1) return _this.$message.error(res.data.msg);
          if (res.data.code == 1) {
            _this.certificateParam.cert_pic_id = res.data.data.id;
          }
        });
    },
    saveBtn() {
      const _this = this;

      let status = false;

      console.log(_this.certificateParam);

      _this.certificateParam.cert_name
        ? _this.certificateParam.cert_time
          ? _this.certificateParam.cert_pic_id
            ? (status = true)
            : _this.$message.error("请上传图片")
          : _this.$message.error("请选择日期")
        : _this.$message.error("请输入证书名称");

      if (status) {
        _this.axios
          .post("shop/Business/setBusinessCertificate", _this.certificateParam)
          .then(res => {
            // console.log(12316516515);
            if (res.data.code == 1000)
              return _this.$router.push({ name: "login" });
            if (res.data.code == 1) {
              _this.$message({
                message: "修改成功",
                type: "success"
              });
            } else {
              _this.$message.error(res.data.msg);
            }
          });
      }
    }
  }
};
</script>
<style lang='less' scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  background-color: #fbfdff;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 178px;
  height: 178px;
}
.avatar-uploader:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
