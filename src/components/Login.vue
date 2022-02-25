<template>
  <div>
    <h1>Login</h1>
    <p v-if="loginError">Usuário ou senha inválidos.</p>
    <label for="login">Username</label>
    <input type="text" name="login" v-model="username"/>

    <label for="password">Password</label>
    <input type="password" name="password" v-model="password"/>

    <button type="button" @click="onClick()">Login</button>
  </div>
</template>

<script>
import { login } from '@/services/apiService';

export default {
  name: 'Login',

  data() {
    return {
      username: '',
      password: '',
      loginError: false,
    };
  },

  methods: {
    onClick() {
      const encryptedPassword = this.encrypt(this.password);
      const result = login(this.username, encryptedPassword);

      if (result) {
        this.$store.commit('setLoggedIn', true);
        this.$router.push('/home');
      } else {
        this.loginError = true;
        this.$store.commit('setLoggedIn', false);
      }
    },

    encrypt(password) {
      let splittedPassword = [];
      const asciiPassword = [];

      splittedPassword = password.split('');

      splittedPassword.forEach((char, index) => {
        asciiPassword[index] = char.charCodeAt(0) * 57;
      });

      const result = asciiPassword.join('|');

      return btoa(result);
    },
  },
};
</script>
