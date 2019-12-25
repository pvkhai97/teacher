import teacher from '../../services/modules/teacher';

export default {
  state: {
    teacher: {},
    teachers: [],
  },
  getters: {
    teacher: state => state.teacher,
    teachers: state => state.teachers,
  },
  mutations: {
    SET_TEACHER: (state, payload) => {
      state.teacher = payload;
    },
    SET_TEACHERS: (state, payload) => {
      state.teachers = payload;
    },
  },
  actions: {
    loadTeacher: async ({ commit }) => {
      const { data } = await teacher.getMe();
      commit('SET_TEACHER', data);
    },
    loadTeachers: async ({ commit }) => {
      const { data } = await teacher.getAll();
      commit('SET_TEACHERS', data);
    },
    createTeacher: async ({ dispatch }, payload) => {
      await teacher.create(payload);
      dispatch('loadTeachers');
    },
    updateTeacher: async ({ dispatch }, payload) => {
      await teacher.update(payload._id, payload);
      dispatch('loadTeachers');
    },
    deleteTeacher: async ({ dispatch }, payload) => {
      await teacher.delete(payload._id);
      dispatch('loadTeachers');
    },
  },
};
