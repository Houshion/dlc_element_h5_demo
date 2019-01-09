<template>
  <div class="header">
    <div class="centerBox flex-center" v-if="isRegiste">
      <div class="pd-10 bg-ff flex-dcc">
        <div class="flex-csb bg-diy pd-lr-10 w100" style="height:40px;">
          <span class="cf">注册</span>
          <img src="../assets/img/close.png" style="width:20px;height:20px;">
        </div>
        <div class="w100 bg-ff pd-10">
          <li class="pd-tb-10 c-diy2 fontb tal mg-b-10">
            <span class="registerTitle pd-b-5">注册账号</span>
          </li>
          <div class="b-e5 flex-cfs mg-b-10">
            <div class="left bg-dd flex-center">
              <img src="../assets/img/y_icon1.png" style="width:13px;height:22px;" alt>
            </div>
            <input
              class="ml20 b0"
              type="text"
              placeholder="请输入手机号"
              style="width:260px;"
              v-model="register.mobile"
              maxlength="11"
              onkeyup="this.value=this.value.replace(/[^0-9]/g,'')"
            >
          </div>
          <div class="flex-csb mt40 mg-b-10" v-show="issms">
            <div class="flex-cfs b-e5">
              <div class="left bg-dd flex-center">
                <img src="../assets/img/y_icon2.png" style="width:22px;height:17px;" alt>
              </div>
              <input
                class="ml20"
                type="text"
                placeholder="请输入手机验证码"
                style="width:160px;"
                v-model="register.sms_code"
              >
            </div>
            <span class="c-diy2 phoneBtn flex-center" @click="countDown">{{count}}</span>
          </div>
          <div class="b-e5 flex-cfs mt40 mg-b-10">
            <div class="left bg-dd flex-center">
              <img src="../assets/img/y_icon3.png" style="width:17px;height:22px;" alt>
            </div>
            <input
              class="ml20"
              type="password"
              placeholder="请输入密码"
              style="width:260px;"
              v-model="register.password"
            >
          </div>
          <div class="b-e5 flex-cfs mt40 mg-b-10">
            <div class="left bg-dd flex-center">
              <img src="../assets/img/y_icon3.png" style="width:17px;height:22px;" alt>
            </div>
            <input
              class="ml20"
              type="password"
              placeholder="请确认输入密码"
              style="width:260px;"
              v-model="register.c_password"
            >
          </div>
          <div class="bg-diy cf flex-center pd-tb-10 mg-t-20 br8" @click="toRegister">注册</div>
          <div class="flex-cfe c9 pd-tb-10">已有账号？马上
            <div
              @click="isRegiste=false;isLogin=true;"
              style="color:#455fd1;border-bottom:1px solid #455fd1;cursor:pointer"
            >登录</div>
          </div>
        </div>
      </div>
    </div>
    <div class="centerBox flex-center" v-if="isLogin">
      <div class="pd-10 bg-ff flex-dcc">
        <div class="flex-csb bg-diy pd-lr-10 wd-100" style="height:40px;">
          <span class="cf">登录</span>
          <img src="../assets/img/close.png" style="width:20px;height:20px;">
        </div>
        <div class="wd-100 bg-ff pd-10">
          <li class="pd-tb-10 bold menu">
            <span
              v-for="(item,index) in menu"
              :class="{'active':isMenu==index}"
              @click="changeMenu(index)"
              style="margin-right:40px;"
              :key="index"
            >{{item.name}}</span>
          </li>
          <div class="b-e5 flex-cfs mg-b-20">
            <div class="left bg-dd flex-center">
              <img src="../assets/img/y_icon1.png" style="width:13px;height:22px;" alt>
            </div>
            <input
              class="ml20 b0"
              type="text"
              placeholder="请输入手机号/账号"
              style="width:260px;"
              v-model="loginParam.username"
            >
          </div>
          <div class="b-e5 flex-cfs mg-b-20" v-if="isMenu==0">
            <div class="left bg-dd flex-center">
              <img src="../assets/img/y_icon3.png" style="width:17px;height:22px;" alt>
            </div>
            <input
              class="ml20"
              type="password"
              placeholder="请输入密码"
              style="width:260px;"
              v-model="loginParam.password"
            >
          </div>
          <div class="flex-csb mg-b-20" v-if="isMenu==1">
            <div class="flex-cfs b-e5">
              <div class="left bg-dd flex-center">
                <img src="../assets/img/y_icon4.png" style="width:20px;height:22px;" alt>
              </div>
              <input
                class="ml20"
                type="text"
                placeholder="请输入验证码"
                style="width:160px;"
                v-model="checkYZMcode"
              >
            </div>
            <!-- <div class="code" @click="changeCode(4)">{{yzmCode}}</div> -->
            <img :src="codeImg" style="width:100px;height:42px;" @click="changeCodeImg">
          </div>
          <div class="flex-csb mg-b-20" v-if="isMenu==1">
            <div class="flex-cfs b-e5">
              <div class="left bg-dd flex-center">
                <img src="../assets/img/y_icon2.png" style="width:22px;height:17px;" alt>
              </div>
              <input
                class="ml20"
                type="text"
                placeholder="请输入手机验证码"
                style="width:160px;"
                v-model="loginParam.sms_code"
              >
            </div>
            <span class="c-diy2 phoneBtn flex-center" @click="countDown">{{count}}</span>
          </div>
          <div class="bg-diy cf flex-center pd-tb-10 mg-b-20 br8" @click="login">登录</div>
          <div
            class="flex-cfe ptb20 c9"
            style="cursor:pointer"
            @click="isRegiste=true;isLogin=false;"
          >免费注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      codeImg: "",
      isShow: true,
      isRegiste: true,
      isLogin: false,
      isMenu: 0,
      issms: false,
      timer: null,
      count: "点击获取",
      menu: [
        {
          name: "密码登录"
        },
        {
          name: "手机登录"
        }
      ],
      checkYZMcode: "",
      loginParam: {
        username: "",
        password: "",
        scene: 1
      },
      register: {
        mobile: "",
        password: "",
        c_password: "",
        verify: "",
        sms_code: ""
      }
    };
  },
  created() {
    const _this = this;
  },
  methods: {
    login() {},
    toRegister() {},
    countDown() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: #1abc9c;
  height: 100%;
  z-index: 1;
}
.logo {
  margin-left: 60px;
}
.logo > img {
  z-index: 100;
  height: 109px;
  width: 319px;
}
.content {
  height: 679px;
  background: url("/assets/img/y_bg.png") no-repeat;
  background-size: 100% 100%;
}
.centerBox {
  /* position: fixed; */
}
.centerBox > div {
  width: 370px;
  /* border: 1px solid #ccc; */
  /* position: absolute; */
  background: rgba(255, 255, 255, 0.2);
  /* border:.1rem solid rgba(255, 255, 255, .2) */
}
.left {
  width: 40px;
  height: 40px;
}
.phoneBtn {
  width: 100px;
  height: 42px;
  border: 1px solid #ccc;
}
.menu .active {
  border-bottom: 1px solid #1abc9c;
  padding-bottom: 2px;
  color: #1abc9c;
}
.registerTitle {
  border-bottom: #1abc9c 3px solid;
}
.code {
  font-family: Arial;
  font-style: italic;
  color: blue;
  font-size: 30px;
  border: 0;
  padding: 2px 3px;
  letter-spacing: 3px;
  font-weight: bolder;
  float: left;
  cursor: pointer;
  width: 100px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  vertical-align: middle;
  background-color: #d8b7e3;
}
</style>
