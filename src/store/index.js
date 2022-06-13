import { createStore } from 'vuex';

export default createStore({
  state: {
    username: '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
  actions: {},
  modules: {},
});
