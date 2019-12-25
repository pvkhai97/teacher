<template>
  <v-container fluid>
    <v-card tile flat>
      <v-card-title>
        <span class="title">Thông tin cá nhân</span>
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="secondary">mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Tên</v-list-item-title>
              <v-list-item-subtitle>{{ student.code }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="secondary">mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Mã sinh viên</v-list-item-title>
              <v-list-item-subtitle>{{ student.fullName }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset />
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="secondary">mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Email</v-list-item-title>
              <v-list-item-subtitle>{{ student.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset />
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="secondary">mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ngành học</v-list-item-title>
              <v-list-item-subtitle>{{ student.sector.name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset />
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="secondary">mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Số điện thoại</v-list-item-title>
              <v-list-item-subtitle>{{ student.phoneNumber }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="secondary">mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ngày sinh</v-list-item-title>
              <v-list-item-subtitle>{{ student.dateOfBirth | dateFormat}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('loadStudent');
  },
  computed: {
    ...mapGetters(['student']),
  },
};
</script>
