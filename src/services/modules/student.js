import api from '@/services/api';

export default {
  get: () => api().get('/students/me'),
  create: student => api().post('students', student),
  update: (studentId, student) => api().put(`students/${studentId}`, student),
  delete: studentId => api().delete(`students/${studentId}`),
};
