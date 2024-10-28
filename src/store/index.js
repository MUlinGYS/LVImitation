import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const ladiesAuditionModule = {
  namespaced: true,
  state: {
    itemId: null,
    listId: null,
    guide: false, 
  },
  mutations: {
     setGuideFalse(state) {
    state.guide = false;
  },
    SET_ITEM_AND_LIST_ID(state, payload) {
      state.itemId = payload.itemId;
      state.listId = payload.listId;
      state.guide = payload.guide; // 更新 guide 状态
      console.log('Received itemId, listId, and guide in Vuex:', payload);
    },
  },
  actions: {
    setItemAndListId({ commit }, payload) {
      commit('SET_ITEM_AND_LIST_ID', payload);
      console.log('setItemAndListId action called with Guide:', payload.guide); // 输出 Guide 参数
    },
  },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ladiesAudition: ladiesAuditionModule,
  },
});