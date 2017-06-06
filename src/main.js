// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './vuex/store'
import Api from './API/axiosApi'
import { Loading } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import "./assets/css/reset.css"
//自适应的css在这
import "./assets/css/respond.less" 
import "animate.css";

Vue.use(ElementUI)
Vue.use(Api)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	store.commit('SetLoading', true)
//	setTimeout(function() {
		next()
//	}, 500);
})

router.afterEach(route => {
	store.commit('SetLoading', false)
	store.commit('setPath', route.path)
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
