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

// 全局引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

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

/**
 * 动态配置路由操作
 */
import {
  constantRouterMap
} from '@/router'
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('new')) {
    var c = JSON.parse(localStorage.getItem('new')),
      lastUrl = getLastUrl(window.location.href, '/');

    if (c.path == lastUrl) { //动态路由页面的刷新事件
      let newRoutes = constantRouterMap.concat([{
        path: c.path,
        component: resolve => require(["@/components/" + c.component + ""], resolve)
      }])
      localStorage.removeItem('new')
      router.addRoutes(newRoutes)
      router.replace(c.path) //replace,保证浏览器回退的时候能直接返回到上个页面，不会叠加
    }
  }
  next()
})
var getLastUrl = (str, yourStr) => str.slice(str.lastIndexOf(yourStr)) //取到浏览器出现网址的最后"/"出现的后边的字符



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
