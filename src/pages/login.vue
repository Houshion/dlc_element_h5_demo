<template>
  <div class="header">
    <header>
      <div class="logo">
        <img src="../assets/img/y_logo.png" alt>
      </div>
    </header>
    <div class="content"></div>
    <div class="flex-dcc ptb10">
      <li class="f22 c-diy" style="font-size:60px;">为什么选我们？</li>
      <li class="f12 c9 mt10" style="font-size:32px;">APSPEED WHEELS</li>
    </div>
    <login></login>
  </div>
</template>

<script>
import login from "@/ocean_demo/login";
export default {
  name: "login",
  data() {
    return {};
  },
  components: {
    login
  },
  created() {
    const _this = this;
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: #1abc9c;
  height: 70px;
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.centerBox > div {
  width: 370px;
  /* border: 1px solid #ccc; */
  position: absolute;
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
