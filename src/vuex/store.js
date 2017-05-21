import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
	isLoading: true,
    routerPath:""
}

let mutations = {
	SetLoading(state, bool){
		state.isLoading = bool
	},
    setPath(state, path){
      state.routerPath = path
    }
}

export default new Vuex.Store({
	state,
	mutations
})
