import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import home from '@/pages/login'
import table from '@/ocean_demo/table'
import charts from '@/ocean_demo/charts'
import loginBox from '@/ocean_demo/login'
import addList from '@/ocean_demo/addList'
import oeditor from '@/ocean_demo/oeditor'
import uploadImg from '@/ocean_demo/uploadImg'

// import lodash from 'lodash'
// import VueLodash from 'vue-lodash'

Vue.use(Router)

// Vue.use(VueLodash, lodash);

export let initMenu = [{
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [ //这里就是二级路由的配置
      {
        path: 'loginBox',
        name: 'loginBox',
        component: loginBox
      },
      {
        path: 'oeditor',
        name: 'oeditor',
        component: oeditor
      },
      {
        path: 'table',
        name: 'table',
        component: table
      },
      {
        path: 'uploadImg',
        name: 'uploadImg',
        component: uploadImg
      },
      {
        path: 'charts',
        name: 'charts',
        component: charts
      },
      {
        path: 'addList',
        name: 'addList',
        component: addList
      },
    ]
  }
]

export let menu = [{
  path: 'home',
  name: '首页',
  component: home,
}]

export default initMenu
