<template>
  <div class="container">
    <!-- Logo 区域 -->
    <div class="navbar-header">
      <a href="/" class="navbar-brand" aria-label="网站首页">网站logo</a>
    </div>

    <!-- 移动端菜单按钮 -->
    <button
      class="menu-toggle"
      :aria-expanded="isOpen ? 'true' : 'false'"
      @click="toggleMenu"
    >
      <span v-if="!isOpen">☰ MENU</span>
      <span v-else>✕ 关闭</span>
    </button>

    <!-- 导航层 -->
    <transition name="fade">
      <div v-show="isOpen" class="nav-wrapper" @click.self="closeMenu">
        <ul class="nav navbar-nav">
          <li
            v-for="item in navList"
            :key="item.name"
            :class="{ active: currentActive === item.name }"
            @click="handleNavClick(item)"
          >
            <a href="javascript:void(0)">{{ item.name }}</a>
          </li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li @click="closeMenu"><a href="/view/login.html">登录</a></li>
          <li @click="closeMenu"><a href="/view/signup.html">注册</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ZbcHeader',
  data() {
    return {
      isOpen: false,
      currentActive: '首页',
      navList: [
        { name: '首页', link: '/' },
        { name: '国内', link: '/domestic' },
        { name: '国际', link: '/global' },
        { name: '数读', link: '/data' },
        { name: '社会', link: '/society' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMenu() {
      this.isOpen = false;
      document.body.style.overflow = '';
    },
    handleNavClick(item) {
      this.currentActive = item.name;
      console.log(`跳转到：${item.link}`);
      this.closeMenu();
    },
  },
  beforeDestroy() {
    document.body.style.overflow = '';
  },
};
</script>
<style scoped>
/* ===== 基础布局 ===== */
.container {
  position: relative;
  padding: 0 15px;
  background: #004C9B;
  color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
}

/* ===== Logo ===== */
.navbar-header {
  display: flex;
  align-items: center;
}

.navbar-brand {
  display: inline-block;
  width: 100px;
  height: 50px;
  background: url("@/assets/img/logo.png") no-repeat center;
  background-size: contain;
  text-indent: -9999px;
}

/* ===== MENU按钮（移动端） ===== */
.menu-toggle {
  margin-left: auto;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.menu-toggle:hover {
  opacity: 0.8;
}

/* ===== 导航容器 ===== */
.nav-wrapper {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #004C9B;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  padding: 10px 0;
  z-index: 999;
}

/* ===== 导航列表 ===== */
.nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-nav li {
  padding: 10px 20px;
}

.navbar-nav li a {
    display: inline-block;
    line-height: 70px;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.2s;
  padding: 0 5px;
}

/* hover效果 */
.navbar-nav li a:hover {
  color: #cce0ff;
}

/* 激活状态 */
.navbar-nav li.active a {
  font-weight: bold;
  border-left: 3px solid #fff;
}

/* 右侧区域 */
.navbar-right {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 10px;
}
/* ===== PC端适配 ===== */
@media (min-width: 768px) {
  .container {
    height: 70px;
  }

  .menu-toggle {
    display: none;
  }

  .nav-wrapper {
    position: static;
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    box-shadow: none;
    padding: 0;
  }

  .navbar-nav {
    display: flex;
  }

  .navbar-nav li {
    padding: 0 15px;
  }

  .navbar-nav li a {
    line-height: 40px;
  }

  .navbar-nav li.active a {
    border: none;
    border-bottom: 3px solid #fff;
    padding-bottom: 2px;
  }

  .navbar-right {
    border: none;
    margin: 0;
  }
}
</style>