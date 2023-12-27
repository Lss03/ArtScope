<template>
  <div class="register-form-container">
    <div class="container">
      <span></span>
      <span></span>
      <span></span>
      <form id="signupForm">
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
  name: 'RegisterComponent',
  // Vue 实例的数据和方法
};
</script>

<style scoped>
@import "@/assets/css/RegistrationStyles.css";
</style>
