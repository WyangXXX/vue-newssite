<template>
  <LogoSlot left-text="欢迎加入我们">
    <div class="form-box">
      <h2>用户注册</h2>

      <div class="form-item">
        <input v-model="username" placeholder="用户名" />
      </div>

      <div class="form-item">
        <input type="password" v-model="password" placeholder="密码" />
      </div>

      <div class="form-item">
        <input type="password" v-model="confirmPassword" placeholder="确认密码" />
      </div>

      <button @click="handleRegister">注册</button>

      <div class="extra">
        <p>
          已有账号？
          <span class="link" @click="goLogin">去登录</span>
        </p>
      </div>
    </div>
  </LogoSlot>
</template>

<script>
import LogoSlot from '@/components/login/LogoSlot.vue'

export default {
  name: 'ZbcSignup',
  components: {
    LogoSlot
  },
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleRegister() {
      if (!this.username || !this.password) {
        alert('请输入完整信息')
        return
      }

      if (this.password !== this.confirmPassword) {
        alert('两次密码不一致')
        return
      }

      alert('注册成功（模拟）')
      this.$router.push('/login')
    },
    goLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.form-box {
  width: 300px;
}

.form-box h2 {
  text-align: center;
  margin-bottom: 30px;
}

.form-item {
  margin-bottom: 20px;
}

.form-item input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-item input:focus {
  outline: none;
  border-color: #409eff;
}

button {
  width: 100%;
  padding: 10px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background: #66b1ff;
}

.extra {
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #666;
}

.link {
  color: #409eff;
  cursor: pointer;
}

.link:hover {
  text-decoration: underline;
}
</style>