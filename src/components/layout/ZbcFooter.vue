<template>
  <footer class="footer">
    <div class="container">
      <p>© 2026 真不戳新闻网 | 版权所有</p>
       <p>
        本网站取材于：
        <a href="https://news.qq.com/" target="_blank">腾讯网</a>、
        <a href="https://www.163.com/news/" target="_blank">网易新闻</a>、
        <a href="https://www.ecit.edu.cn/" target="_blank">东华理工大学官网</a>、
        <a href="https://github.com/" target="_blank">GitHub</a>
      </p>
      <p>本网站内容仅用于课程设计与学习展示</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  margin-top: 30px;
  padding: 20px 0;
  text-align: center;
  background: #f5f5f5;
  color: #999;
  font-size: 13px;
}

.footer p {
  margin: 6px 0;
}

.footer a {
  color: #666;
  text-decoration: none;
  margin: 0 3px;
}

.footer a:hover {
  color: #ea0c3c;
  text-decoration: underline;
}
</style>