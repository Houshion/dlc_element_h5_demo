<template>
  <div id="changePass">
    <div id="listBar">
      <div class="bar">
        <div class="name box">修改密码</div>
      </div>
    </div>
    <div class="form">
      <div class="oldPass mg-t-10">
        <el-row>
          <el-col :span="3" height>
            <label>
              <span class="cred">*</span>原始密码
            </label>
          </el-col>
          <el-col :span="21">
            <el-input v-model="passParam.old_password" type="password" placeholder="请输入原密码"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="newPass mg-t-10">
        <el-row>
          <el-col :span="3" height>
            <label>
              <span class="cred">*</span>新密码
            </label>
          </el-col>
          <el-col :span="21">
            <el-input v-model="passParam.password" type="password" placeholder="请输入新密码"></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="reNewPass mg-t-10">
        <el-row>
          <el-col :span="3" height>
            <label>
              <span class="cred">*</span>确认新密码
            </label>
          </el-col>
          <el-col :span="21">
            <el-input v-model="passParam.c_password" type="password" placeholder="请再次输入新密码"></el-input>
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
export default {
  name: "changePass",
  data() {
    return {
      passParam: {
        old_password: "",
        password: "",
        c_password: ""
      }
    };
  },

  components: {},

  created() {
    const _this = this;
  },

  mounted() {
    const _this = this;
  },
  methods: {
    saveBtn() {
      const _this = this;

      let status = false;

      _this.passParam.old_password
        ? _this.passParam.password
          ? _this.passParam.c_password
            ? _this.passParam.password == _this.passParam.c_password
              ? (status = true)
              : _this.$message.error("两次输入的密码不一致")
            : _this.$message.error("请再次输入新密码")
          : _this.$message.error("请输入新密码")
        : _this.$message.error("请输入原始密码");

      if (status) {
        _this.axios
          .post("shop/Business/setBusinessPassword", _this.passParam)
          .then(res => {
            // console.log(12316516515);
            if (res.data.code == 1) {
              _this.$message({
                message: "修改成功",
                type: "success"
              });
              _this.passParam = {
                old_password: "",
                password: "",
                c_password: ""
              };
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
</style>
