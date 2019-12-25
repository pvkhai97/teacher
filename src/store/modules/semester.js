import semester from '../../services/modules/semester';

export default {
  state: {
    semesters: [],
  },
  getters: {
    semesters: state => state.semesters,
  },
  mutations: {
    SET_SEMESTERS: (state, payload) => {
      state.semesters = payload;
    },
  },
  actions: {
    loadSemesters: async ({ commit }) => {
      const { data } = await semester.getAll();
      commit('SET_SEMESTERS', data);
    },
    createSemester: async ({ dispatch }, payload) => {
      await semester.create(payload);
      dispatch('loadSemesters');
    },
    updateSemester: async ({ dispatch }, payload) => {
      await semester.update(payload._id, payload);
      dispatch('loadSemesters');
    },
    deleteSemester: async ({ dispatch }, payload) => {
      await semester.delete(payload._id);
      dispatch('loadSemesters');
    },
  },
};
