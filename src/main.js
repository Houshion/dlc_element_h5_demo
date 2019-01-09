// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 使用原装ueditor
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'
import '../static/ueditor/ueditor.parse.min.js'

// 使用封装vueditor
import VueUeditorWrap from "vue-ueditor-wrap";
Vue.component('vue-ueditor-wrap', VueUeditorWrap)

// 使用element封装低于选择
// import VueAreaLinkage from 'vue-area-linkage';
// Vue.use(VueAreaLinkage)

// 全局引入axios请求
import axios from "../static/js/axios";
Vue.prototype.axios = axios;

// 全局引入公共函数
import o_base from '../static/js/o_base'
Vue.prototype.$base = o_base

/**** 全局引用filters过滤器 ****/
//全局方法Vue.filter()统一注册自定义过滤器
import * as filters from "../static/js/filters"
Object.keys(filters).forEach(key => { //返回filters对象中属性名组成的数组
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
