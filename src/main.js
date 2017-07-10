// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './assets/style/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/style/el-ui.css'
import './mock/index.js';
import App from './App';

import ajax from './common/ajax.js'

Vue.use(ElementUI)

Vue.prototype.$ajax = ajax;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
