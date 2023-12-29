<template>
  <v-app>
    <v-row class="fill-height ma-0">
      <v-col cols="12" md="3" class="pa-0">
        <!-- 修改侧边栏的颜色为淡蓝色，并为列表项增加间距和白色字体 -->
        <v-navigation-drawer permanent app color="#00838F" class="rounded">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="./assets/logo.svg" alt="用户头像">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="white--text">神秘人</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <!-- 导航链接 -->
          <v-list dense>
            <v-list-item link @click="$router.push('/')" class="white--text py-2">
              <v-list-item-icon>
                <v-icon color="white">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>广场</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="$router.push('/ai')" class="white--text py-2">
              <v-list-item-icon>
                <v-icon color="white">mdi-brush</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>AI绘画</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="$router.push('/login')" class="white--text py-2">
              <v-list-item-icon>
                <v-icon color="white">mdi-login</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>登录</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="$router.push('/MyPage')" class="white--text py-2">
              <v-list-item-icon>
                <v-icon color="white">mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>个人中心</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- ... 其他 v-list-item -->
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <!-- 右侧内容区 -->
      <v-col cols="12" md="9" class="pa-0">
        <!-- 右侧区域的顶部标题 -->
        <!-- 路由视图 -->
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  // ... 其他选项
};
</script>

<style>
/* 您可以在这里添加全局样式 */
</style>
