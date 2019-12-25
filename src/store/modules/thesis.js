import thesis from '../../services/modules/thesis';

export default {
  state: {
    thesis: [],
  },
  getters: {
    thesis: state => state.thesis,
  },
  mutations: {
    SET_THESIS: (state, payload) => {
      state.thesis = payload;
    },
  },
  actions: {
    loadThesis: async ({ commit }) => {
      const { data } = await thesis.getAll();
      commit('SET_THESIS', data);
    },
    createThesis: async ({ dispatch }, payload) => {
      await thesis.create(payload);
      dispatch('loadThesis');
    },
    updateThesis: async ({ dispatch }, payload) => {
      await thesis.update(payload._id, payload);
      dispatch('loadThesis');
    },
    deleteThesis: async ({ dispatch }, payload) => {
      await thesis.delete(payload._id);
      dispatch('loadThesis');
    },
  },
};
