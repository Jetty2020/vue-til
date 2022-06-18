import { createStore } from 'vuex';
import { loginUser } from '@/api/auth';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';

export default createStore({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
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
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setUsername', data.user.username);
      commit('setToken', data.token);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.username);
      return data;
    },
  },
  modules: {},
});
