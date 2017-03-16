import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		open: false,
     	docked: true,
     	topPopup: false,
     	loading: false,
     	showHF: true,
		count: 1,
		limit: 8,
		bottomNav: 'home',
		topPopupMsg: '',
		movieList: []
	},
	actions: {
		//获取数据 异步
		increments: function(context) {
	      context.commit('INCREMENT')
	    },
		loadMovieList: function(context) {
			axios.get('https://bird.ioliu.cn/netease?playlist_id=621793299')
			.then(function(res) {
                context.commit('SET_MOVIE_LIST', {list: res.data.result.tracks})
                // state.loading = false
            }).catch(function(err){console.log(err)})
		},
		changeFlag: function(context) {
			context.commit('SET_FLAG')
		},
		changeBottomPopup: function(context) {
			context.commit('SET_BottomPopup')
		},
	},
	mutations: {  //同步
		INCREMENT: function(state) {
	      state.count++
	    },
		SET_MOVIE_LIST: function(state, list) {
			state.loading = true
			setTimeout(function() {
				state.loading = false
			}, 1000)	
			state.movieList = list
		},
		SET_FLAG: function(state) {
			state.open = !state.open
			state.docked = !state.docked
		},
		SET_BottomPopup: function(state) {
			state.topPopup = true
	        if (state.topPopup) {
		        setTimeout(function() {
		          state.topPopup = false
		        }, 2000)
		      }
		}

	},
	getters: {
		doubleCount: function(state) {
	      return state.count * 2
	    }
	},
	modules: {

	}
})

export default store

// store.commit('increment')

// console.log(store.state.count)