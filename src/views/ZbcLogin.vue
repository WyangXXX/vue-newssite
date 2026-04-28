<template>
  <LogoSlot left-text="欢迎回来">
    <div class="form-box">
      <h2>用户登录</h2>

      <div class="form-item">
        <input v-model="username" placeholder="用户名" />
      </div>

      <div class="form-item">
        <input type="password" v-model="password" placeholder="密码" />
      </div>

      <button @click="handleLogin">登录</button>

      <div class="extra">
        <p>
          还没有账号？
          <span class="link" @click="goRegister">马上注册</span>
        </p>
      </div>
    </div>
  </LogoSlot>
</template>

<script>
import LogoSlot from '@/components/login/LogoSlot.vue'

export default {
  name: 'ZbcLogin',
  components: {
    LogoSlot
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      if (!this.username || !this.password) {
        alert('请输入账号和密码')
        return
      }

      if (this.username === 'admin' && this.password === '123456') {
        alert('登录成功')
        this.$router.push('/')
      } else {
        alert('账号或密码错误')
      }
    },
    goRegister() {
      this.$router.push('/signup')
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