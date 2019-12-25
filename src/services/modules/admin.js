import api from '@/services/api';

export default {
  getAll: () => api().get('/admins'),
  create: admin => api().post('admins', admin),
  update: (adminId, admin) => api().put(`admins/${adminId}`, admin),
  delete: adminId => api().delete(`admins/${adminId}`),
};
