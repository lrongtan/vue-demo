

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: localStorage.getItem('userToken') ? JSON.parse(localStorage.getItem('userToken')):{},
    agentId: "115",
    appId: "1000001",
    appSecret: "40f49e46e55442da93dec691fe290dde",
    userId:"13416918869",
    channel: "",
  },
  mutations: {
    SET_USER_TOKEN(state, info){
      localStorage.setItem('userToken', JSON.stringify(info))
      state.userToken = info
    },
    SET_AGENT_ID(state, info){
      state.agentId = info
    },
    SET_APP_ID(state, info){
      state.appId = info
    },
    SET_APP_SECRET(state, info){
      state.appSecret = info
    },
    SET_USER_ID(state, info){
      state.userId = info
    },
    SET_CHANNEL(state, info){
      state.channel = info
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
    setAppSecret({ commit }, info){
      commit('SET_APP_SECRET', info)
    },
    setUserId({ commit }, info){
      commit('SET_USER_ID', info)
    },
    setChannel({ commit }, info){
      commit('SET_CHANNEL', info)
    },
  },

  getters:{
    userToken: state => state.userToken,
    agentId: state => state.agentId,
    appId: state => state.appId,
    appSecret: state => state.appSecret,
    userId: state => state.userId,
    channel: state => state.channel,
  },
})
