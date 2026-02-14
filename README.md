# 重要信息提醒

## 数据库配置
- 账号: root
- 密码: 123456
- 数据库名: vercel_app

## GitHub 仓库
https://github.com/SxDove/vercel.git

## 项目说明
这是一个 Next.js 全栈项目，实现了简单的用户管理增删改查功能。

## 快速开始

1. 安装依赖:
```bash
npm install
```

2. 初始化数据库:
执行 `init.sql` 文件中的 SQL 语句

3. 运行开发服务器:
```bash
npm run dev
```

4. 打开浏览器访问 http://localhost:3000

## 部署到 Vercel

在 Vercel 控制台配置以下环境变量:
- DB_HOST
- DB_USER
- DB_PASSWORD
- DB_NAME
- DB_PORT
