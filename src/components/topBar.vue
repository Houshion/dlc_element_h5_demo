<template>
  <div id="topBar">
    <div class="bg">
      <img src="../assets/topBar.png" alt>
    </div>
    <div class="flex">
      <div class="img mgl15">
        <img src="../assets/logo.png" alt>
      </div>
      <div class="flexEnd mgr15 csp">
        <div class="img mgr15">
          <img src="../assets/i_exit.png" alt>
        </div>
        <div @click="logout">退出系统</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$router.push({
        name: "login"
      });
    }
  }
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  height: 84px;
  color: #ffffff;
}
.flexEnd {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
img {
  display: block;
}
.bg,
.bg img {
  height: 84px;
  max-width: 100%;
}
.mgl15 {
  margin-left: 15px;
}
.mgr15 {
  margin-right: 15px;
}
.csp {
  cursor: pointer;
}
</style>
