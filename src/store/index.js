import Vue from 'vue';
import Vuex from 'vuex';
import department from './modules/department';
import sector from './modules/sector';
import teacher from './modules/teacher';
import student from './modules/student';
import subject from './modules/subject';
import semester from './modules/semester';
import thesis from './modules/thesis';
import admin from './modules/admin';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    department,
    sector,
    teacher,
    student,
    subject,
    semester,
    thesis,
    admin,
  },
});
