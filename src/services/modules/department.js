import api from '@/services/api';

export default {
  getAll: () => api().get('/departments'),
  create: department => api().post('departments', department),
  update: (departmentId, department) => api().put(`departments/${departmentId}`, department),
  delete: departmentId => api().delete(`departments/${departmentId}`),
};
