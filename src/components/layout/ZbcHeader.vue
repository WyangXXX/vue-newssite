<template>
  <div class="container">
    <!-- Logo -->
    <div class="navbar-header">
      <router-link to="/home" class="navbar-brand">网站logo</router-link>
    </div>

    <!-- 导航 -->
    <div class="nav-wrapper">
        <ul class="nav navbar-nav">
        <li
          v-for="item in navList"
          :key="item.name"
          :class="{ active: isActive(item.link) }"
        >
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <!-- 未登录时显示 -->
        <template v-if="!isLoggedIn">
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/signup">注册</router-link></li>
        </template>

        <!-- 已登录时显示头像 -->
        <li v-else class="userprofile">
          <router-link to="/userprofile">
            <!-- 这里引用你的头像图片 -->
            <img src="@/assets/img/profile.png" alt="用户头像" class="user-avatar" />
            <span class="username">{{ username }}</span>
          </router-link>
            </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZbcHeader",
  data() {
    return {
      navList: [
        { name: "首页", link: "/home" },
        { name: "国内", link: "/domestic" },
        { name: "国际", link: "/global" },
        { name: "财经", link: "/finance" },
        { name: "社会", link: "/society" }
      ],
      isLoggedIn: false // 登录状态
    };
  },
  mounted() {
    // 1. 页面加载时检查本地存储是否有登录标记
    this.checkLoginStatus();

    // 2. 监听 storage 事件，实现跨组件通信（当 login 组件修改 storage 时，这里会自动更新）
    window.addEventListener('storage', this.checkLoginStatus);
  },
  beforeDestroy() {
    // 组件销毁时移除监听，防止内存泄漏
    window.removeEventListener('storage', this.checkLoginStatus);
    document.body.style.overflow = "";
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
    // 检查登录状态的函数
    checkLoginStatus() {
      // 这里判断 localStorage 中是否有 'token' 或者 'user' 字段
      const user = localStorage.getItem('user_token'); 
      this.isLoggedIn = !!user; 
    }
  }
};
</script>

<style scoped>
/* ... 原有的样式保持不变 ... */
.container {
  display: flex;
  align-items: center;
  height: 60px;
  background: #004C9B;
  color: #fff;
  padding: 0 15px;
}
.navbar-brand {
  width: 100px;
  height: 50px;
  display: inline-block;
  background: url("@/assets/img/logo.png") no-repeat center;
  background-size: contain;
  text-indent: -9999px;
}
.nav-wrapper {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav li {
  padding: 0 15px;
}
.nav li a {
  color: #fff;
  text-decoration: none;
  line-height: 60px;
}
.nav li a:hover {
  color: #cce0ff;
}
.nav li.active a {
  border-bottom: 3px solid #fff;
  padding-bottom: 2px;
}

/* --- 新增头像样式 --- */
.user-profile a {
  display: flex;
  align-items: center;
}
.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%; /* 圆形头像 */
  margin-right: 8px;
  vertical-align: middle;
}
.username {
  line-height: 60px; /* 保持文字垂直居中 */
}
</style>