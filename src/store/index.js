import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const ladiesAuditionModule = {
  namespaced: true,
  state: {
    itemId: null,
    listId: null,
    guide: null,
    commodityID: null,
  },
  mutations: {
    // 重置 guide guide 状态与 detail 通用
    setGuideFalse(state) {
      state.guide = null;
      console.log('更新后的 guide 值：', state.guide);
    },
    SETITEMANDLISTID(state, payload) {
      state.itemId = payload.itemId;
      state.listId = payload.listId;
      state.guide = payload.guide; // 更新 guide 状态
    },
    COMMODITYID(state, id) {
      state.commodityID = id.commodityID;
      state.guide = id.guide;
      console.log('guide', id.guide);
      console.log('commodityID', state.commodityID);
    }
  },
  actions: {
    ItemidAndListid({ commit }, payload) {
      commit('SETITEMANDLISTID', payload);
    },
    commodityID({ commit }, id) {
      commit('COMMODITYID', id);
    }
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