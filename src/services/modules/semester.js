import api from '@/services/api';

export default {
  getAll: () => api().get('/semesters'),
  create: semester => api().post('semesters', semester),
  update: (semesterId, semester) => api().put(`semesters/${semesterId}`, semester),
  delete: semesterId => api().delete(`semesters/${semesterId}`),
};
