# GitHub Pages 部署指南

## 📋 准备工作
1. **GitHub 账号**: 确保你有 GitHub 账号
2. **Git 安装**: 确保电脑已安装 Git
3. **文件准备**: 所有网站文件已就绪

## 🚀 部署步骤

### 步骤1: 创建 GitHub 仓库
1. 访问 https://github.com/new
2. 填写仓库信息:
   - **Repository name**: `drug-design-navigation` (建议)
   - **Description**: 药物设计导航平台
   - **Public** (选择公开)
   - **不要**初始化 README、.gitignore 或 license
3. 点击 "Create repository"

### 步骤2: 初始化本地 Git 仓库
```bash
# 打开命令行，进入网站目录
cd /d "D:\software\workbuddy\Test\260321-net"

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "初始提交: 药物设计导航平台 v1.0.0"
```

### 步骤3: 连接到 GitHub 仓库
```bash
# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/drug-design-navigation.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤4: 启用 GitHub Pages
1. 访问你的仓库页面: `https://github.com/YOUR_USERNAME/drug-design-navigation`
2. 点击 **Settings** (设置)
3. 左侧菜单选择 **Pages** (页面)
4. 在 **Source** 部分:
   - 选择 **Deploy from a branch** (从分支部署)
   - 选择 **main** 分支
   - 选择 **/(root)** 文件夹
5. 点击 **Save** (保存)

### 步骤5: 等待部署完成
1. GitHub 会自动开始部署
2. 等待约 1-2 分钟
3. 刷新页面，你会看到绿色的部署成功消息
4. 你的网站地址将是: `https://YOUR_USERNAME.github.io/drug-design-navigation/`

## 🔍 验证部署
1. 访问你的网站地址
2. 检查所有功能是否正常
3. 测试响应式设计
4. 验证所有外部链接

## ⚡ 快速命令参考
```bash
# 完整部署流程
cd /d "D:\software\workbuddy\Test\260321-net"
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/YOUR_USERNAME/drug-design-navigation.git
git branch -M main
git push -u origin main
```

## 🛠️ 故障排除

### 问题1: 页面显示 404
- 等待几分钟后重试
- 检查仓库设置中的 Pages 配置
- 确保文件已正确推送到 main 分支

### 问题2: 样式或脚本不加载
- 检查控制台错误
- 确保文件路径正确
- 清除浏览器缓存

### 问题3: 部署失败
- 检查 GitHub Actions 日志
- 确保没有语法错误
- 验证文件结构

## 🔄 更新网站
```bash
# 修改文件后
git add .
git commit -m "更新描述"
git push origin main
# GitHub Pages 会自动重新部署
```

## 📱 自定义域名（可选）
1. 在仓库 Settings → Pages
2. 找到 Custom domain
3. 输入你的域名
4. 按照提示配置 DNS

## 📊 部署状态检查
- 仓库页面顶部的环境部署状态
- Settings → Pages 中的部署历史
- GitHub Actions 工作流运行

## ⏱️ 部署时间
- 首次部署: 1-3 分钟
- 后续更新: 30-60 秒
- 缓存更新: 即时生效

## 🔗 示例链接
- 仓库: `https://github.com/YOUR_USERNAME/drug-design-navigation`
- 网站: `https://YOUR_USERNAME.github.io/drug-design-navigation/`

## 📞 技术支持
- GitHub Docs: https://docs.github.com/pages
- 社区支持: GitHub Discussions
- 问题反馈: GitHub Issues

---
*部署完成后，你的药物设计导航平台将对全世界开放访问！*