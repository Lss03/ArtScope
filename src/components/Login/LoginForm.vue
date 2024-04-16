<template>
    <div class="login-form-container" :class="{signup: isRegistering}">
        <div class="container">
            <span></span>
            <span></span>
            <span></span>
            <!-- 登录表单 -->
            <form id="signinForm" v-if="!isRegistering">
                <h2>Login</h2>
                <div class="inputBox">
                    <input type="text" placeholder="Username" v-model="login.username">
                    <!-- 显示用户名错误信息 -->
<!--                    <p v-if="loginErrors.username">{{ loginErrors.username }}</p>-->
                </div>
                <div class="inputBox">
                    <input type="password" placeholder="Password" v-model="login.password">
                    <!-- 显示密码错误信息 -->
<!--                    <p v-if="loginErrors.password">{{ loginErrors.password }}</p>-->
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
    isRegistering: Boolean,
  },
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
      register: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      // 添加本地状态用于显示当前用户名或"神秘用户"
      currentUsername: '神秘用户',
    };
  },
  methods: {
    toggleSignup() {
      this.$emit('toggle-signup');
    },
    async signIn() {
      try {
        const data = await this.$store.dispatch('user/loginUser', {
          username: this.login.username,
          password: this.login.password,
        });
        if (data && data.success) { // 这里添加了额外的检查
          await this.$store.dispatch('user/fetchUserDetails', this.login.username);
          this.currentUsername = this.$store.getters['user/userDetails'].accountName || '神秘用户';
          console.log('当前用户名',this.currentUsername)
          await this.$router.push('/Home');
        } else {
          alert('Login failed. Please check your username and password.');
        }
      } catch (error) {
        console.error(error);
        alert('Login process encountered an error.');
      }
    },
    async signUp() {
      if (this.register.password !== this.register.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
         await this.$store.dispatch('user/registerUser', {
          username: this.register.username,
          email: this.register.email,
          password: this.register.password,
        });
          await this.$router.push('/Home');
        // 注册成功，等待登录和获取用户详细信息完成
      } catch (error) {
        console.error(error);
        alert('Registration process encountered an error.');
      }
    },
  },
  created() {
    // 检查用户是否已登录
    if (this.$store.getters['user/isAuthenticated']) {
      this.currentUsername = this.$store.getters['user/userDetails'].username;
    }
  },
};
</script>
<style scoped>
@import '@/assets/css/loginFormStyles.css';
/* Additional styles as needed */
</style>
