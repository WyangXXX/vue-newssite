# 基于 Vue2 的静态新闻展示网站

## 项目简介

本项目是一个基于 Vue2 框架开发的静态新闻展示网站，采用单页面应用（SPA）架构，实现了新闻的浏览、分类筛选及详情展示等功能。项目不依赖后端和数据库，所有数据均通过本地静态数据模拟完成。

该项目旨在通过前端技术模拟真实新闻网站的基本功能结构，提升组件化开发与页面组织能力。

---

## 技术栈

* Vue2
* Vue Router
* JavaScript (ES6)
* HTML5 + CSS3

---

## 项目结构

```bash
src/
├── assets/                      # 静态资源
│   ├── banner/                  # 轮播图图片
│   │   ├── banner1.png
│   │   ├── ...
│   ├── domestic/                # 国内新闻配图
│   │   ├── domestic1.png
│   │   ├── ...
│   ├── global/                  # 国际新闻配图
│   │   ├── global1.png
│   │   ├── ...
│   ├── finance/                 # 财经新闻配图
│   │   ├── finance1.png
│   │   ├── ...
│   ├── society/                 # 社会新闻配图
│   │   ├── society1.png
│   │   ├── ...
│   └── img/                     # 通用图片
│       └── profile.png          # 用户头像
│
├── components/                  # 组件层
│   ├── layout/                  # 页面基础布局
│   │   ├── ZbcHeader.vue        # 顶部导航
│   │   └── ZbcFooter.vue        # 底部
│   │
│   ├── home/                    # 首页核心模块
│   │   ├── ZbcBanner.vue        # 轮播图
│   │   ├── ZbcMain.vue          # 主体容器
│   │   ├── ZbcNewsList.vue      # 中间新闻列表
│   │   ├── ZbcNewsCard.vue      # 单条新闻卡片
│   │   ├── ZbcRightBar.vue      # 右侧栏容器
│   │   ├── ZbcSearch.vue        # 搜索框
│   │   └── ZbcHot.vue           # 热搜模块
│   │
│   ├── category/                # 分类页复用组件
│   │   └── NewsItem.vue         # 分类页新闻条目
│   │
│   └── login/                   # 登录页组件
│       └── LogoSlot.vue         # Logo插槽组件
│
├── views/                       # 页面级结构
│   ├── ZbcHome.vue              # 首页（拼装所有组件）
│   ├── ZbcNewsDetail.vue        # 新闻详情页
│   ├── ZbcDomestic.vue          # 国内新闻页
│   ├── ZbcGlobal.vue            # 国际新闻页
│   ├── ZbcFinance.vue           # 财经新闻页
│   ├── ZbcSociety.vue           # 社会新闻页
│   ├── ZbcLogin.vue             # 登录页
│   ├── ZbcSignup.vue            # 注册页
│   └── UserProfile.vue          # 用户主页
│
├── data/                        # 数据层（Mock数据）
│   ├── banner.js                # 轮播图数据
│   ├── domestic.js              # 国内新闻数据
│   ├── global.js                # 国际新闻数据
│   ├── finance.js               # 财经新闻数据
│   ├── society.js               # 社会新闻数据
│   └── news.js                  # 综合新闻数据
│
├── router/                      # 路由配置
│   └── index.js                 # 路由定义
│
├── utils/                       # 工具函数
│   └── eventBus.js              # 跨组件通信总线
│
├── style/                       # 全局样式
│   ├── base.css                 # 基础样式
│
├── App.vue                      # 根组件
└── main.js                      # 入口文件
```

---

## 功能模块

### 首页

* 提供全局导航入口
* 展示轮播图推荐新闻
* 展示热门新闻
* 搜索框
* 热搜模块

### 分类页

* 按国内、国际、财经、社会分类展示新闻列表

### 新闻详情页

* 展示新闻完整标题，作者，发布时间，内容等

### 登录/注册页

* 提供用户登录和注册功能
* 登录后可查看个人主页
* 储存用户登录状态至localStorage

### 用户主页

* 展示用户基本信息（头像、昵称、邮箱）
* 提供退出登录功能

---

## 项目特点

* 采用组件化开发思想，提高代码复用性
* 使用 Vue Router 实现页面跳转
* 使用本地数据模拟接口，体现前后端分离思想
* 页面结构清晰，模块划分合理

---

## 项目运行

```bash
# 安装依赖
npm install

# 启动项目
npm run serve
```

运行后在浏览器打开：

```
http://localhost:8080
```

---

## 页面说明

* 首页：展示推荐新闻及导航
* 详情页：展示新闻具体内容及评论区
* 登录页：用户登录和注册
* 注册页：用户注册
* 用户主页：展示用户信息及操作

---

## 后续优化方向

* 增加搜索功能（关键词过滤）
* 优化 UI 设计（卡片布局、美化界面）
* 增加用户评论功能（登录后可评论）
* 增加新闻点赞功能（登录后可点赞）
* 接入真实后端接口

---

## 项目总结

本项目通过 Vue2 框架实现了一个完整的静态新闻展示系统，涵盖了组件化开发、路由管理、数据渲染等前端核心技术。通过本次课程设计，进一步加深了对前端工程化开发流程的理解。

---
