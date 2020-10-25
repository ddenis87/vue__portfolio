import axios from 'axios';

import { createStore } from 'vuex';

export default createStore({
  state: {
    listSkils: [],
  },
  getters: {
    GET_LIST_SKILS(state) { return state.listSkils; }
  },
  mutations: {
    SET_LIST_SKILS(state, option) { state.listSkils = option; }
  },
  actions: {
    async SET_LIST_SKILS(state) {
      await axios
        .get('./json/skils.json')
        .then(response => {
          state.commit('SET_LIST_SKILS', response.data);
        })
    }
    
  }
})