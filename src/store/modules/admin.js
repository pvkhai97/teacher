import admin from '../../services/modules/admin';

export default {
  state: {
    admins: [],
  },
  getters: {
    admins: state => state.admins,
  },
  mutations: {
    SET_ADMINS: (state, payload) => {
      state.admins = payload;
    },
  },
  actions: {
    loadAdmins: async ({ commit }) => {
      const { data } = await admin.getAll();
      commit('SET_ADMINS', data);
    },
    createAdmin: async ({ dispatch }, payload) => {
      await admin.create(payload);
      dispatch('loadAdmins');
    },
    updateAdmin: async ({ dispatch }, payload) => {
      await admin.update(payload._id, payload);
      dispatch('loadAdmins');
    },
    deleteAdmin: async ({ dispatch }, payload) => {
      await admin.delete(payload._id);
      dispatch('loadAdmins');
    },
  },
};
