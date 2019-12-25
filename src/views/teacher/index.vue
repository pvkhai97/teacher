<template>
  <v-container fluid>
    <v-card flat>
      <v-card-title>
        <v-spacer/>
        <v-text-field
          dense
          v-model="search"
          append-icon="mdi-search"
          label="Tìm kiếm"
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="teachers"
        :search="search"
      >
        <template
          v-slot:top
        >
          <v-toolbar flat color="white">
            <v-card-title>
              Danh sách giảng viên
            </v-card-title>
            <v-spacer/>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon
            color="accent"
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            color="error"
            small
            class="mr-2"
            @click="deleteItem(item)"
          >
            mdi-trash-can-outline
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Tên giảng viên',
          value: 'fullName',
          filterable: true,
          width: '15%',
        },
        {
          text: 'Khoa/viện',
          value: 'department.name',
          filterable: true,
          width: '20%',
        },
        {
          text: 'Email',
          value: 'email',
          filterable: false,
          width: '15%',
        },
        {
          text: 'Số điện thoại',
          value: 'phoneNumber',
          filterable: false,
          width: '15%',
        },
      ],
      editedItem: {},
    };
  },
  mounted() {
    this.$store.dispatch('loadTeachers');
  },
  computed: {
    ...mapGetters(['teachers']),
    formTitle() {
      return this.editedItem.id ? 'Sửa thông tin giảng viên' : 'Thêm thông tin giảng viên';
    },
  },
};
</script>
