<template>
  <div class="login-form-container" :class="{signup: showSignup}">
    <div class="container">
      <span></span>
      <span></span>
      <span></span>
      <!-- 登录表单 -->
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

      <!-- 注册表单 -->
      <form id="signupForm" v-if="showSignup">
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
          <a href="#" @click.prevent="toggleSignup">Already Have an Account ? <b>Login</b></a>
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
}
</script>

<style scoped>
/* 以下是您提供的CSS代码，已经加上了scoped属性 */
@import '@/assets/css/loginFormStyles.css';
</style>



<style scoped>
@import '@/assets/css/loginFormStyles.css';
</style>
