import subject from '../../services/modules/subject';

export default {
  state: {
    subjects: [],
  },
  getters: {
    subjects: state => state.subjects,
  },
  mutations: {
    SET_SECTORS: (state, payload) => {
      state.subjects = payload;
    },
  },
  actions: {
    loadSubjects: async ({ commit }) => {
      const { data } = await subject.getAll();
      commit('SET_SECTORS', data);
    },
    createSubject: async ({ dispatch }, payload) => {
      await subject.create(payload);
      dispatch('loadSubjects');
    },
    updateSubject: async ({ dispatch }, payload) => {
      await subject.update(payload._id, payload);
      dispatch('loadSubjects');
    },
    deleteSubject: async ({ dispatch }, payload) => {
      await subject.delete(payload._id);
      dispatch('loadSubjects');
    },
  },
};
