// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import 'style/styleInitialize.css'
import axios from'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// 设置项目请求的根路径,设置以后，项目中调所有接口就会在前面拼接上根路径
axios.defaults.baseURL = 'http://';
// 使用axios发送post请求时,设置默认请求头中Content-Type的值
axios.defaults.headers.post['Content-Type'] = 'application/json';
// 给请求头加一个名为'Authorization'的参数，可以用于设置请求头带token验证
axios.defaults.headers.common['Authorization'] = 'Bearer YWMtknehLoJT2k_f7mlPoNgo';

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 发送请求前要做的事
    console.log('发送请求前');
    console.log(config);
 
    return config;
  },
  error => {
    return Promise.reject(error);
  });
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对拿到的响应数据做些事
    console.log(response.config.url);
    console.log(response.data);
 
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
