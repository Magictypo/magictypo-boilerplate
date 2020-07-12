import MasterSvc from '../../services/MasterSvc';
import ErrorSvc from '../../services/ErrorSvc';

const SET_CATEGORIES = 'SET_CATEGORIES';

const master = {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    [SET_CATEGORIES](state, v) {
      state.categories = v;
    },
  },
  actions: {
    async getMasterCategories({ commit }, payload) {
      console.log('some payload', payload);
      try {
        const categories = await MasterSvc.getAllCategories();
        commit(SET_CATEGORIES, categories.data.data);
      } catch (e) {
        this.$toast.error(ErrorSvc.getError(e));
      }
    },
  },
};

export default master;
