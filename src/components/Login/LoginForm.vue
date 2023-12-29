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
  data() {
    return {
      isRegistering: false,
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
      this.isRegistering = !this.isRegistering;
    },
    signIn() {
      const user = this.users.find(u => u.username === this.login.username && u.password === this.login.password);
      if (user) {
        this.$router.replace('/Mypage'); // Replace with actual route
      } else {
        alert('Invalid credentials or user does not exist.');
      }
    },
    signUp() {
      const userExists = this.users.some(u => u.username === this.register.username);
      if (userExists) {
        alert("Username already exists");
      } else if (this.register.username === '') {
        alert("Username cannot be empty");
      } else if (this.register.password !== this.register.confirmPassword) {
        alert("Passwords do not match");
      } else {
        this.users.push({
          username: this.register.username,
          email: this.register.email,
          password: this.register.password
        });
        alert("Registration successful");
        this.toggleSignup();
      }
    }
  }
};
</script>
<style scoped>
@import '@/assets/css/loginFormStyles.css';
/* Additional styles as needed */
</style>
