import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.use(ElementUI);
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:4000/"
axios.defaults.withCredentials=true
Vue.prototype.axios=axios
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
