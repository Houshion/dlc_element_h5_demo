import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import table from '@/ocean_demo/table'
import charts from '@/ocean_demo/charts'
import loginBox from '@/ocean_demo/login'
import oeditor from '@/ocean_demo/oeditor'
import uploadImg from '@/ocean_demo/uploadImg'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
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
      ]
    }
  ]
})
