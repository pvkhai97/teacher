<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card flat tile>
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>
                  Đăng nhập
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="handleLogin">
                  <v-text-field
                    label="Email"
                    name="login"
                    v-model="email"
                    :messages="message"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Mật khẩu"
                    name="password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                  <v-btn
                    type="submit"
                    color="primary"
                  >
                    Đăng nhập
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const payload = await axios.post('http://localhost:3002/api/auth/login', {
          email: this.email,
          password: this.password,
        });
        const { token } = payload.data;
        localStorage.setItem('token', token);
        await this.$router.push('/');
      } catch (err) {
        this.password = '';
        this.message = 'Tên tài khoản hoặc mật khẩu không chính xác';
      }
    },
  },
};
</script>
