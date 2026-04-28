<template>
  <div class="login-page">
    <div class="login-container">
      <!-- 左侧固定内容 -->
      <div class="left">
        <img src="@/assets/img/logo.png" class="logo" />
        <h1>真不戳新闻网</h1>
        <p>{{ leftText }}</p>
      </div>

      <!-- 右侧插槽 -->
      <div class="right">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoSlot',
  props: {
    leftText: {
      type: String,
      default: '欢迎回来'
    }
  }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  background: linear-gradient(135deg, #004c9b, #001a33);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  width: 800px;
  height: 450px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.left {
  width: 40%;
  background: linear-gradient(135deg, #004c9b, #003366);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
 width: 80%;
 height: 60%;
 margin-bottom: 20px;
}

.left h1 {
  margin: 0;
  font-size: 24px;
}

.left p {
  margin-top: 10px;
  opacity: 0.8;
}

.right {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>