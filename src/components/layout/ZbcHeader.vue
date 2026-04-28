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
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/signup">注册</router-link></li>
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
        { name: "数读", link: "/data" },
        { name: "社会", link: "/society" }
      ]
    };
  },

  methods: {
    isActive(path) {
      return this.$route.path === path;
    }
  },

  beforeDestroy() {
    document.body.style.overflow = "";
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  height: 60px;
  background: #004C9B;
  color: #fff;
  padding: 0 15px;
}

/* logo */
.navbar-brand {
  width: 100px;
  height: 50px;
  display: inline-block;
  background: url("@/assets/img/logo.png") no-repeat center;
  background-size: contain;
  text-indent: -9999px;
}

/* nav */
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

/* hover */
.nav li a:hover {
  color: #cce0ff;
}

/* active */
.nav li.active a {
  border-bottom: 3px solid #fff;
  padding-bottom: 2px;
}
</style>