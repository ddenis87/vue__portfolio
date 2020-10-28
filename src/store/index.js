import axios from 'axios';

import { createStore } from 'vuex';

export default createStore({
  state: {
    listSkils: [],
    listProject: [],
  },
  getters: {
    GET_LIST_SKILS(state) { return state.listSkils; },
    GET_LIST_PROJECT(state) { return state.listProject; },
  },
  mutations: {
    SET_LIST_SKILS(state, option) { state.listSkils = option; },
    SET_LIST_PROJECT(state, option) { state.listProject = option; },
  },
  actions: {
    async SET_LIST_SKILS(state) {
      await axios
        .get('./json/skils.json')
        .then(response => {
          state.commit('SET_LIST_SKILS', response.data);
        })
    },
    async SET_LIST_PROJECT(state) {
      await axios
        .get('./json/project.json')
        .then(response => {
          state.commit('SET_LIST_PROJECT', response.data);
        })
    },
  }
})