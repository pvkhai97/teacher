import student from '../../services/modules/student';

export default {
  state: {
    student: {},
  },
  getters: {
    student: state => state.student,
  },
  mutations: {
    SET_STUDENT: (state, payload) => {
      state.student = payload;
    },
  },
  actions: {
    loadStudent: async ({ commit }) => {
      const { data } = await student.get();
      commit('SET_STUDENT', data);
    },
    createStudent: async ({ dispatch }, payload) => {
      await student.create(payload);
      dispatch('loadStudents');
    },
    updateStudent: async ({ dispatch }, payload) => {
      await student.update(payload._id, payload);
      dispatch('loadStudents');
    },
    deleteStudent: async ({ dispatch }, payload) => {
      await student.delete(payload._id);
      dispatch('loadStudents');
    },
  },
};
