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
      this.$emit('toggle-signup');//？？？子组件向父组件传值

    },
      updateUsername(newUsername) {
          localStorage.setItem('username', newUsername);
          this.$eventBus.$emit('usernameUpdated', newUsername);
      },
      async signIn() {
          try {
              // 发送请求到后端验证用户名和密码
              const response = await fetch('https://7aee36ef-ff2c-4af7-b3cf-911287232704.mock.pstmn.io/login', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      username: this.login.username,
                      password: this.login.password,
                  }),
              });

              const data = await response.json();
              console.log(data);

              // 检查后端返回的数据，确认登录是否成功
              if (data.success && data.token) {
                  // 存储token到LocalStorage或其他持久化存储，用于持久化登录状态
                  localStorage.setItem('authToken', data.token);
                  // 可选：存储其他用户信息
                  localStorage.setItem('username', this.login.username); // 存储用户名

                 // 更新应用状态
                 //  await this.$store.commit('setUsername', {
                 //      username: localStorage.getItem('username')
                 //      // 其他需要存储的用户信息
                 //  });
                  const newUsername = localStorage.getItem('username');
                  console.log(newUsername);//检查是否存储上
                  this.$eventBus.$emit('usernameUpdated', newUsername);

                  // 跳转到个人信息界面
                  await this.$router.push('/Mypage');
              } else {
                  // 登录失败，显示错误信息
                  alert('Login failed. Please check your username and password.');
              }
          } catch (error) {
              // 处理请求失败的情况
              console.error('Login error:', error);
              alert('An error occurred during the login process.');
          }
      },

      clearLoginForm() {
      this.login.username = '';
      this.login.password = '';
    },
    async signUp() {
      if (this.register.password !== this.register.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      try {
        const response = await fetch('https://7aee36ef-ff2c-4af7-b3cf-911287232704.mock.pstmn.io/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.register.username,
            email: this.register.email,
            password: this.register.password
          })
        });
        const data = await response.json();
        console.log(data);
        // if (data.success) {
        //   alert("Registration successful");//注册成功
        //   this.toggleSignup();
        // }
          // 检查后端返回的数据，确认登录是否成功
          if (data.success && data.token) {
              // 存储token到LocalStorage或其他持久化存储，用于持久化登录状态
              localStorage.setItem('authToken', data.token);
              // 可选：存储其他用户信息
              localStorage.setItem('username', this.register.username); // 存储用户名
              const un=localStorage.getItem('username');//检查是否存储上
              console.log("register"+un);
              //更新状态信息


              // 跳转到个人信息界面
              await this.$router.push('/Mypage');
          } else {
          alert("Registration failed");
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('An error occurred while registering.');
      }
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
