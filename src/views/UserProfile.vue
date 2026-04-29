<template>
  <div class="profile-page">
    <div class="profile-card">
      <img class="avatar" src="@/assets/img/profile.png" alt="头像" />
      <h2 class="username">{{ username }}</h2>
      <p class="bio">欢迎来到我的个人主页</p>

      <div class="info-row">
        <span>📧 邮箱：admin@example.com</span>
      </div>
      <div class="info-row">
        <span>📅 注册时间：2024-03-15</span>
      </div>

      <div class="button-group">
        <button class="btn edit-btn" @click="editProfile">编辑资料</button>
        <button class="btn logout-btn" @click="logout">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      username: 'admin'
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user_token')
      localStorage.removeItem('username')
      this.$router.push('/home').then(() => {
        location.reload()
      })
    },
    editProfile() {
      alert('编辑资料功能开发中')
    }
  }
}
</script>

<style scoped>
.profile-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  background-color: #f5f5f5;
  padding: 20px;
}

.profile-card {
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 16px;
  padding: 30px 24px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 2px solid #e0e0e0;
}

.username {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
}

.bio {
  font-size: 14px;
  color: #999;
  margin-bottom: 24px;
}

.info-row {
  text-align: left;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #555;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.btn {
  flex: 1;
  padding: 10px 0;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.8;
}

.edit-btn {
  background-color: #409eff;
  color: white;
}

.logout-btn {
  background-color: #f56c6c;
  color: white;
}
</style>