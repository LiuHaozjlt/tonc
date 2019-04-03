// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// import uploader from 'vue-easy-uploader'
import store from './store'
import publi_css from './css/dlu.css'
import VueI18n from 'vue-i18n'
import i18nZh from '@/i18n/zh'
import i18nLaos from '@/i18n/laos'

// for (const key in VueAMap) {
//   console.log(VueAMap)

// }
import VueAMap from 'vue-amap'
import vant from 'vant'
import 'vant/lib/index.css'
// import mock from 'mockjs'
import axius from 'axios'
import mint from 'mint-ui'
import eleui from 'element-ui'
import eleuicss from '../node_modules/element-ui/lib/theme-chalk/index.css'
import eleuiconp from '../node_modules/element-ui/lib/index.js'
import '../src/js/mui.js'
import '../src/fonts/mui.ttf'
import '../src/css/mui.css'
import '../src/css/new-cent.css'
// //引入css
import 'mint-ui/lib/style.css'
import '../src/css/publ-styl.css'
import {api} from '../src/api/api'

import i18nVant from './test.js'


Vue.use(api)
Vue.use(vant)
Vue.use(VueAMap)
Vue.use(eleuiconp)
Vue.use(eleuicss)
Vue.use(eleui)
// Vue.use(VueAMap)
Vue.use(mint)

Vue.use(VueI18n)
const i18n= new VueI18n({
  locale: 'zh', // set locale
  messages: {
    zh: i18nZh,
    laos: i18nLaos
  } // set locale messages
})
Vue.prototype.Vue = Vue
Vue.prototype.mint = mint
Vue.prototype.axius = axius
Vue.prototype.VueAMap = VueAMap
Vue.prototype.$api = api
// Vue.prototype.mock = mock

VueAMap.initAMapApiLoader({
  key: 'c757e07cf2be665408ef5fb8c0dc4912',
  // eslint-disable-next-line standard/array-bracket-even-spacing
  plugin: ['AMap.Autocomplete', 'AMap.Geocoder', 'AMap.Geolocation' ]
  // v: '1.4.4'
})
// 具体地址服务

// let AlertOptions = {
//   title: '', // 默认标题为 '提示'
//   btn: {
//     text: '',
//     style: {} // 可以通过 style 来修改按钮的样式, 比如说粗细, 颜色
//   }
// }
// let ConfirmOptions = {
//   title: '',
//   style: {}, // 同时应用在 yes, no 两个按钮上面的样式
//   yes: {
//     text: '确定',
//     style: {}
//   },
//   no: {
//     text: '取消',
//     style: {}
//   }
// }
// let duration = {
//   durtaion: 200,
//   location: 'center|top ' // 如果不传递, 默认在底部, 如果传递, 就必须要有值
// }
// import {
//   Alert,
//   Confirm,
//   Toast
// } from 'wc-messagebox'
// import 'wc-messagebox/style.css'
// Vue.use(Alert, AlertOptions)
// Vue.use(Confirm, ConfirmOptions)
// Vue.use(Toast, duration)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  created () {
    let userInfo = store.state.userInfo
    if ((!userInfo || !userInfo.access_token) && this.$route.path === '/index') {
      this.$router.replace('/dlu')
    }
    this.$store.dispatch('indexmenu')
  }
})
