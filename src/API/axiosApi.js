import Qs from 'qs'
import Axios from 'axios'

const Promise = require("es6-promise").polyfill()

//POST传参序列化
Axios.interceptors.request.use((config) => {
	if (config.method === 'post') {
		config.data = Qs.stringify(config.data);
	}
	return config;
}, (error) => {
	throw new Error("错误传参")
});

//ajax成功回调验证
Axios.interceptors.response.use(function (res) {
	return res;
}, function (error) {
	throw new Error("网络出错")
	return Promise.reject(error);
});


const Api = {
	getSkill(params) {
		const url = '/static/skill.json'
		return Axios.get(url)
	},

	getData(params) {
		const url = "/static/data.json"
		return Axios.get(url)
	}
}

export default {
  install (Vue) {
    Vue.prototype.$Api = Api
    Vue.Api = Api
  },
  $http: Api
}
