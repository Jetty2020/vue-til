import { createStore } from 'vuex';

export default createStore({
  state: {
    username: '',
  },
  getters: {},
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
  actions: {},
  modules: {},
});
