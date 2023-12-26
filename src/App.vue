<template>
  <v-app>
    <v-row class="fill-height ma-0">
      <!-- 固定侧边栏 -->
      <v-col cols="12" md="3" class="pa-0">
        <!-- 使用内置的背景色 -->
        <v-navigation-drawer permanent app color="blue-grey lighten-5">
          <!-- 用户头像和昵称，使用v-list-item-group和v-list-item的slots -->
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="./assets/logo.svg" alt="用户头像">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>神秘人</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <!-- 导航链接 -->
          <v-list dense>
            <v-list-item link @click="$router.push('/')">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>广场</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-brush</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>AI绘画</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="$router.push('/login')">
              <v-list-item-icon>
                <v-icon>mdi-login</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>登录</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>个人中心</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- ... -->
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <!-- 右侧内容区 -->
      <v-col cols="12" md="9" class="pa-0">
        <!-- 右侧区域的顶部标题 -->
        <v-sheet
            color="blue lighten-2"
            class="d-flex align-center"
            height="200px"
            tile
        >
          <v-container>
            <v-row justify="center">
              <v-col cols="12" class="text-center">
                <span class="display-2 white--text">艺景图片交易绘画平台</span>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>

        <!-- 路由视图 -->
        <v-container class="py-0 px-4 fill-height">
          <router-view></router-view>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    // Data properties here
  }),
  methods: {
  },

  // Other options here
};
</script>
