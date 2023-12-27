<template>
  <div class="login-form-container" :class="{signup: isRegistering}">
    <div class="container">
        <span></span>
        <span></span>
        <span></span>
      <!-- 使用 isRegistering 控制显示哪个表单 -->
      <form id="signinForm" v-if="!isRegistering">
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
          <a href="#" @click.prevent="toggleSignup">Already Have an Account ? <b>Login</b></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    isRegistering: Boolean
  },
  data() {
    return {
      // 定义 showSignup 和 login 对象
      showSignup: false,
      login: {
        username: '',
        password: ''
      },
      // 添加 register 对象定义
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
      this.$emit('toggle-signup'); // 通知父组件切换状态
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
@import '@/assets/css/loginFormStyles.css';
/* 其他样式 */
</style>
