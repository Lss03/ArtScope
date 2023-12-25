<template>
  <v-app>
    <v-row class="fill-height ma-0">
      <!-- 固定侧边栏 -->
      <v-col cols="12" md="3" class="pa-0">
        <v-navigation-drawer permanent app class="white">
          <!-- 用户头像和昵称 -->
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <img src="./assets/logo.svg" alt="用户头像">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>神秘人</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <!-- 导航链接 -->
          <v-list dense class="pt-0">
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
      <v-col cols="12" md="9">
        <!-- 艺术字标题 -->
        <div class="artistic-header">
          <div class="artistic-title">艺景图片交易绘画平台</div>
        </div>
        <!-- 内容区域的padding -->
        <v-container class="py-0 px-4">
          <!-- 路由视图 -->
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
  // Methods or other options here
};
</script>

<style scoped>
.artistic-header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1976D2; /* 或您喜欢的颜色 */
  padding: 16px 0;
  border-radius: 16px;
  position: fixed; /* 将位置设置为固定 */
  top: 0;
  left: 300px; /* 与侧边栏的宽度相同 */
  right: 0;
  z-index: 100;
}

.artistic-title {
  font-family: 'Amatic SC', cursive; /* 或您喜欢的艺术字体 */
  font-size: 3rem;
  color: #FFD700; /* 金色 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.content-area {
  padding-top: 80px; /* 为固定的标题栏留出足够空间 */
  overflow-y: auto;
  height: 100vh;
  padding-right: 16px; /* 防止内容紧贴右侧边缘 */
}

@media (min-width: 960px) {
  .v-navigation-drawer {
    width: 300px !important;
  }

  .artistic-header {
    left: 300px; /* 保持与侧边栏宽度一致 */
  }
}
</style>

