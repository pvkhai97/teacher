import sector from '../../services/modules/sector';

export default {
  state: {
    sectors: [],
  },
  getters: {
    sectors: state => state.sectors,
  },
  mutations: {
    SET_SECTORS: (state, payload) => {
      state.sectors = payload;
    },
  },
  actions: {
    loadSectors: async ({ commit }) => {
      const { data } = await sector.getAll();
      commit('SET_SECTORS', data);
    },
    createSector: async ({ dispatch }, payload) => {
      await sector.create(payload);
      dispatch('loadSectors');
    },
    updateSector: async ({ dispatch }, payload) => {
      await sector.update(payload._id, payload);
      dispatch('loadSectors');
    },
    deleteSector: async ({ dispatch }, payload) => {
      await sector.delete(payload._id);
      dispatch('loadSectors');
    },
  },
};
