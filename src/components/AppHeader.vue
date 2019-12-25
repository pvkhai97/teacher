<template>
  <v-app-bar clipped-left color="primary" app>
    <v-toolbar-title class="font-weight-light white--text">Hệ thống quản lý đồ án</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon text v-on="on">
            <v-avatar color="indigo">
              <v-icon class="white--text">mdi-account-circle</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-list dense width="180">
          <v-list-item @click="handleLogout">
            <v-list-item-title>Đăng xuất</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title @click.stop="dialog = true">Thay đổi mật khẩu</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-dialog max-width="500" v-model="dialog">
      <v-card>
        <v-card-title>
          <span class="headline">Thay đổi mật khẩu</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  label="Mật khẩu hiện tại"
                  type="password"
                  v-model="password"
                  :messages="message"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Mật khẩu mới" type="password" v-model="newPassword" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Xác nhận mật khẩu" type="password" v-model="rePassword" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="blue darken-1" text @click="dialog = false">Hủy</v-btn>
          <v-btn color="blue darken-1" text @click="handleChangePassword">Xác nhận</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dialog: false,
      password: '',
      newPassword: '',
      rePassword: '',
      message: '',
    };
  },
  methods: {
    handleLogout() {
      window.localStorage.removeItem('token');
      this.$router.push('/login');
    },
    async handleChangePassword() {
      if (this.rePassword === this.newPassword) {
        try {
          await axios.post('http://localhost:3002/api/auth/change-password', {
            password: this.password,
            newPassword: this.newPassword,
          });
          this.dialog = false;
          this.message = '';
        } catch (e) {
          this.message = 'Sai mật khẩu';
        }
      } else {
        this.message = 'Mật khẩu không khớp';
      }
    },
  },
};
</script>
