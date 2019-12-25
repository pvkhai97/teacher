import api from '@/services/api';

export default {
  getAll: () => api().get('/subjects'),
  create: subject => api().post('subjects', subject),
  update: (subjectId, subject) => api().put(`subjects/${subjectId}`, subject),
  delete: subjectId => api().delete(`subjects/${subjectId}`),
};
