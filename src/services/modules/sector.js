import api from '@/services/api';

export default {
  getAll: () => api().get('/sectors'),
  create: sector => api().post('sectors', sector),
  update: (sectorId, sector) => api().put(`sectors/${sectorId}`, sector),
  delete: sectorId => api().delete(`sectors/${sectorId}`),
};
