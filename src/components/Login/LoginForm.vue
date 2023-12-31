<template>
  <div class="login-form-container" :class="{signup: isRegistering}">
    <div class="container">
        <span></span>
        <span></span>
        <span></span>
      <!-- Toggle between login and registration form -->
      <form id="signinForm" v-if="!isRegistering">
        <h2>Login</h2>
        <div class="inputBox">
          <input type="text" placeholder="Username" v-model="login.username">
        </div>
        <div class="inputBox">
          <input type="password" placeholder="Password" v-model="login.password">
        </div>
        <div class="inputBox group">
          <a href="#">Forgot Password?</a>
          <a href="#" @click="toggleSignup">Signup</a>
        </div>
        <div class="inputBox">
          <input type="submit" value="Sign in" @click.prevent="signIn">
        </div>
      </form>
      <form id="signupForm" v-else>
        <h2>Registration</h2>
        <div class="inputBox">
          <input type="text" placeholder="Username" v-model="register.username">
        </div>
        <div class="inputBox">
          <input type="text" placeholder="Email Address" v-model="register.email">
        </div>
        <div class="inputBox">
          <input type="password" placeholder="Create Password" v-model="register.password">
        </div>
        <div class="inputBox">
          <input type="password" placeholder="Confirm Password" v-model="register.confirmPassword">
        </div>
        <div class="inputBox">
          <input type="submit" value="Register Account" @click.prevent="signUp">
        </div>
        <div class="inputBox group">
          <a href="#" @click="toggleSignup">Already Have an Account ? <b>Login</b></a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginForm',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    isRegistering: Boolean // 从父组件接收 isRegistering
  },
  data() {
    return {
      users: [], // Simulating a user database
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
    };
  },
  methods: {
    toggleSignup() {
      this.$emit('toggle-signup');
    },
    signIn() {
  const user = this.users.find(u => u.username === this.login.username);
  if (!user) {
    alert('User does not exist.');
    this.clearLoginForm();
    return;
  }
  if (user.password === this.login.password) {
    this.$router.replace('/Mypage'); // Navigate to user profile
  } else {
    alert('Username or Password is incorrect.');
    this.clearLoginForm();
  }
},
  clearLoginForm() {
  this.login.username = '';
  this.login.password = '';
},
signUp() {
      if (!this.register.username || !this.register.email || !this.register.password) {
        alert("Username, Email Address, and Password cannot be empty");
        return;
      }
      if (this.register.password !== this.register.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      const userExists = this.users.some(u => u.username === this.register.username);
      if (userExists) {
        alert("Username already exists");
        this.clearRegistrationForm();
        return;
      }
      this.users.push({
        username: this.register.username,
        email: this.register.email,
        password: this.register.password
      });
      alert("Registration successful");
      this.toggleSignup();
    },
    clearRegistrationForm() {
      this.register.username = '';
      this.register.email = '';
      this.register.password = '';
      this.register.confirmPassword = '';
    }
  }
};
</script>
<style scoped>
@import '@/assets/css/loginFormStyles.css';
/* Additional styles as needed */
</style>
