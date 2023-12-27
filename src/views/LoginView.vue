<!-- LoginView.vue -->
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
        <LoginHeader />

        <!-- 登录表单 -->
        <LoginComponent />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import LoginComponent from '@/components/Login/Login.vue';
import LoginHeader from '@/components/Login/LoginHeader.vue';
export default {
  name: 'LoginView',
  components: {
    LoginHeader,
    LoginComponent
  }
};
</script>
