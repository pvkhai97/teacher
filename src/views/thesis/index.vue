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
        :items="thesis"
        :search="search"
      >
        <template
          v-slot:top
        >
          <v-toolbar flat color="white">
            <v-card-title>
              Danh sách đồ án
            </v-card-title>
            <v-spacer/>
          </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
          <input
            type="file"
            ref="file" v-show="false"
            accept=".zip,.rar,.7zip"
            @change="handleUpload(item)"
          >
          <v-icon
            color="error"
            small
            class="mr-2"
            @click="$refs.file.click()"
          >
            mdi-upload
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
  data() {
    return {
      dialog: false,
      menu: false,
      search: '',
      headers: [
        {
          text: 'Tên đồ án',
          value: 'name',
          filterable: true,
        },
        {
          text: 'Môn học',
          value: 'subject.name',
        },
        {
          text: 'Giảng viên',
          value: 'teacher.fullName',
        },
        {
          text: 'Điểm',
          value: 'score',
          width: '7%',
        },
        {
          value: 'action',
          width: '7%',
        },
      ],
      editedItem: {},
    };
  },
  mounted() {
    this.$store.dispatch('loadThesis');
    this.$store.dispatch('loadSubjects');
  },
  computed: {
    ...mapGetters(['thesis', 'subjects']),
  },
  methods: {
    async handleUpload(item) {
      const formData = new FormData();
      formData.append('attached', this.$refs.file.files[0]);
      await axios.post(`http://localhost:3001/api/thesis/${item._id}/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    },
  },
};
</script>
