<template>
  <v-container
    fluid
  >
    <p class="title">Dashboard</p>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('loadDepartments');
    this.$store.dispatch('loadTeachers');
    this.$store.dispatch('loadStudents');
  },
  computed: {
    ...mapGetters(['departments', 'teachers', 'students']),
  },
};
</script>
