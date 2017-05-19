import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
	isLoading: true
}

let mutations = {
	SetLoading(state, bool){
		state.isLoading = bool
	}
}

export default new Vuex.Store({
	state,
	mutations
})
