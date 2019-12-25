import department from '../../services/modules/department';

export default {
  state: {
    departments: [],
  },
  getters: {
    departments: state => state.departments,
  },
  mutations: {
    SET_DEPARTMENTS: (state, payload) => {
      state.departments = payload;
    },
  },
  actions: {
    loadDepartments: async ({ commit }) => {
      const { data } = await department.getAll();
      commit('SET_DEPARTMENTS', data);
    },
    createDepartment: async ({ dispatch }, payload) => {
      await department.create(payload);
      dispatch('loadDepartments');
    },
    updateDepartment: async ({ dispatch }, payload) => {
      await department.update(payload._id, payload);
      dispatch('loadDepartments');
    },
    deleteDepartment: async ({ dispatch }, payload) => {
      await department.delete(payload._id);
      dispatch('loadDepartments');
    },
  },
};
