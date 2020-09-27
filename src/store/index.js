

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: sessionStorage['userToken'] ? JSON.parse(sessionStorage['userToken']):{},
  },
  mutations: {
    SET_USER_TOKEN(state, info){
      sessionStorage['userToken'] = JSON.stringify(info)
      state.userToken = info
    }
  },
  actions: {
    setUserToken({ commit }, info){
      commit('SET_USER_TOKEN', info)
    }
  },

  getters:{
    userToken: state => state.userToken
  },
})
