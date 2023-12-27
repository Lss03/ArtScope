<!-- LoginView.vue -->
<template>
  <v-container fluid>
    <!-- 模拟侧边栏宽度的容器 -->
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <!-- 这里是空的，用于模拟侧边栏的宽度 -->
      </v-col>

      <v-col cols="12" md="9" style="overflow-y: hidden; scrollbar-width: none; -ms-overflow-style: none;">
        <!-- 标题栏 -->
        <LoginHeader v-if="!isRegistering" />
        <RegisterHeader v-else/> <!-- 假设你有一个注册标题栏组件 -->

        <!-- 登录表单 -->
        <LoginComponent v-if="!isRegistering" @toggleSignup="toggleSignup" />
        <RegisterComponent v-else @toggleSignup="toggleSignup" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import LoginComponent from '@/components/Login/Login.vue';
import LoginHeader from '@/components/Login/LoginHeader.vue';
import RegisterComponent from '@/components/Login/Registration.vue';
import RegisterHeader from "@/components/Login/RegisterHeader.vue";
export default {
  name: 'LoginView',
  components: {
    LoginHeader,
    LoginComponent,
    RegisterComponent,
    RegisterHeader
  },
  data() {
    return {
      isRegistering: false
    };
  },
  methods: {
    toggleSignup() {
      this.isRegistering = !this.isRegistering;
    }
  }
};
</script>
