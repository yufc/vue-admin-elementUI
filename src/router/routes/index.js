import Layout from '@/views/layout/index.vue'
import Home from '@/views/home'
import NotFound from '@/views/404/404'
import Login from '@/views/login/login'

const routes = [{
  path: '/',
  name: '',
  title: '首页',
  component: Layout,
  bread: false,
  leaf: true,
  icon: 'fa fa-home fa-lg',
  children: [{
    path: '/home',
    component: Home,
    name: 'Home',
    title: '首页',
    bread: false
  }, {
    "path": "/404",
    "component": NotFound,
    "name": "404"
  }]
}, {
  path: '/login',
  component: Login,
  name: 'Login',
  title: '首页',
  hidden: true
}, {
  path: '/user',
  name: 'User',
  title: '用户',
  component: Layout,
  bread: true,
  icon: 'fa fa-user fa-lg',
  children: [{
    path: '/user/index',
    component: () => import('@/views/user/index'),
    name: 'UserIndex',
    title: '用户列表',
    bread: true
  }]
}, {
  path: '/ui',
  title: '分类',
  name: 'Menu',
  component: Layout,
  bread: true,
  icon: 'fa fa-table fa-lg',
  children: [{
    path: '/ui/echarts',
    component: () => import('@/views/ui/echarts'),
    name: 'UiEchart',
    title: '图表',
    bread: true
  }, {
    path: '/ui/form',
    component: () => import('@/views/ui/form'),
    bread: true,
    title: '表单',
    name: 'UiForm'
  }, {
    path: '/ui/ueditor',
    component: () => import('@/views/ui/ueditor'),
    bread: true,
    title: '编辑',
    name: 'ueditor'
  }, {
    path: '/ui/tree',
    component: () => import('@/views/ui/tree'),
    name: 'UiTree',
    title: '树形',
    bread: true
  }]
}]
export default routes
