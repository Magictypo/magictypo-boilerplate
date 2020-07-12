import axios from 'axios';

// import UserSvc from '../../services/UserSvc';
// import ErrorSvc from '../../services/ErrorSvc';

const SET_ACCESS_TOKEN = 'set_access_token';
const SET_USER_DATA = 'set_user_data';

// noinspection JSUnusedGlobalSymbols
const authStore = {
  namespaced: true,
  state: {
    accessToken: undefined,
    isAuthenticated: false,
    user: {},
  },
  getters: {
    accessToken(state) {
      if (!state.accessToken) {
        return sessionStorage.getItem('accessToken');
      }
      return state.accessToken;
    },
    currentUser(state) {
      return state.user;
    },
  },
  mutations: {
    [SET_ACCESS_TOKEN](state, v) {
      state.isAuthenticated = true;
      state.accessToken = v;
      sessionStorage.setItem('accessToken', v);
      axios.defaults.headers.common.Authorization = `Bearer ${v}`;
    },
    [SET_USER_DATA](state, v) {
      sessionStorage.setItem('user', JSON.stringify(v));
      state.user = v;
    },
  },
  actions: {
    setAccessToken: ({ commit }, v) => {
      commit(SET_ACCESS_TOKEN, v);
    },
    setCurrentUser: ({ commit }, v) => {
      commit(SET_USER_DATA, v);
    },
    // async getUser({ commit, dispatch }) {
    async getUser() {
      // console.log(commit, dispatch);
      // TODO: add handler
    },
  },
};

export default authStore;
