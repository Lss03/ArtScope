<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <!-- 模拟侧边栏宽度的容器 -->
      </v-col>

      <v-col cols="12" md="9">
        <LoginHeader v-if="!isRegistering" />
        <RegisterHeader v-else />

        <LoginForm :isRegistering="isRegistering" @toggle-signup="toggleSignup" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm.vue";
import LoginHeader from '@/components/Login/LoginHeader.vue';
import RegisterHeader from "@/components/Login/RegisterHeader.vue";

export default {
  name: 'LoginView',
  components: {
    LoginHeader,
    LoginForm,
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

<!-- Add any styles if necessary -->
