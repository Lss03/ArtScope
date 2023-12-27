<template>
  <div class="login-form-container">
    <div class="container">
      <span></span>
      <span></span>
      <span></span>
      <form id="signinForm">
        <h2>Login</h2>
        <div class="inputBox">
          <input type="text" placeholder="Username" v-model="login.username">
        </div>
        <div class="inputBox">
          <input type="password" placeholder="Password" v-model="login.password">
        </div>
        <div class="inputBox group">
          <a href="#">Forgot Password</a>
          <a href="#" @click="toggleSignup">Signup</a>
        </div>
        <div class="inputBox">
          <input type="submit" value="Sign in" @click.prevent="signIn">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      showSignup: false,
      login: {
        username: '',
        password: ''
      },
      register: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    toggleSignup() {
      this.showSignup = !this.showSignup;
    },
    signIn() {
      // 登录逻辑
    },
    signUp() {
      // 注册逻辑
    }
  }
};
</script>

<style scoped>
@import "@/assets/css/LoginStyles.css";
</style>
