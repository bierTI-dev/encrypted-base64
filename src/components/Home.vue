<template>
  <div>
    <h1>HOME PAGE</h1>

    <ul>
      <li v-for="(user, index) in list" :key="index">
        {{ user.username }} <p>Senha BASE64</p>
        {{ user.password }} <p>Senha ASCII</p>"
        {{ decodePassword(user.password) }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getUsers } from '@/services/apiService';

export default {
  name: 'Home',

  data() {
    return {
      list: [],
    };
  },

  mounted() {
    if (!this.$store.state.isLoggedIn) this.$router.push('/');
    this.list = getUsers();
  },

  methods: {
    decodePassword(password) {
      return atob(password);
         }
  },
};
</script>
