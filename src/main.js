import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import store from "./store";
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/icon/iconfont.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
