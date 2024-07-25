import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import { Lazyload } from 'vant';
import { Popup } from 'vant';
import 'vant/lib/index.css';
import './views/style/index.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.prototype.$bus = new Vue(); //事件总线
Vue.use(VueVideoPlayer)
Vue.use(Popup);
Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
