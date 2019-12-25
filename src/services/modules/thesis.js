import api from '@/services/api';

export default {
  getAll: () => api().get('/thesis/me'),
  create: thesis => api().post('thesis', thesis),
  update: (thesisId, thesis) => api().put(`thesis/${thesisId}`, thesis),
  delete: thesisId => api().delete(`thesis/${thesisId}`),
};
