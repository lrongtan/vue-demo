

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: sessionStorage['userToken'] ? JSON.parse(sessionStorage['userToken']):{},
    agentId: "1",
    appId: "123",
  },
  mutations: {
    SET_USER_TOKEN(state, info){
      sessionStorage['userToken'] = JSON.stringify(info)
      state.userToken = info
    },
    SET_AGENT_ID(state, info){
      state.agentId = info
    },
    SET_APP_ID(state, info){
      state.appId = info
    }
  },
  actions: {
    setUserToken({ commit }, info){
      commit('SET_USER_TOKEN', info)
    },
    setAgentId({ commit }, info){
      commit('SET_AGENT_ID', info)
    },
    setAppId({ commit }, info){
      commit('SET_APP_ID', info)
    },
  },

  getters:{
    userToken: state => state.userToken,
    agentId: state => state.agentId,
    appId: state => state.appId,
  },
})
