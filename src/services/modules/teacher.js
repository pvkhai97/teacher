import api from '@/services/api';

export default {
  getAll: () => api().get('/teachers'),
  getMe: () => api().get('/teachers/me'),
  create: teacher => api().post('teachers', teacher),
  update: (teacherId, teacher) => api().put(`teachers/${teacherId}`, teacher),
  delete: teacherId => api().delete(`teachers/${teacherId}`),
};
