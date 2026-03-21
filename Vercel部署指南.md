# Vercel 部署指南

Vercel 是部署静态网站的最佳选择之一，提供：
- ⚡ 极速全球 CDN
- 🔄 自动 HTTPS
- 🌐 自定义域名
- 📱 自动响应式优化
- 🆓 免费套餐

## 📋 准备工作
1. **Vercel 账号**: 使用 GitHub 账号登录 https://vercel.com
2. **GitHub 仓库**: 确保网站已在 GitHub 上
3. **网站文件**: 所有文件准备就绪

## 🚀 部署步骤

### 方法A: 通过 GitHub 导入（推荐）

#### 步骤1: 登录 Vercel
1. 访问 https://vercel.com
2. 点击 "Sign Up" 或 "Log In"
3. 使用 GitHub 账号登录

#### 步骤2: 导入项目
1. 点击 "Add New..." → "Project"
2. 从 GitHub 仓库列表中选择 `drug-design-navigation`
3. 或点击 "Import Git Repository"
4. 输入仓库地址: `https://github.com/YOUR_USERNAME/drug-design-navigation`

#### 步骤3: 配置项目
1. **Project Name**: `drug-design-navigation` (自动生成)
2. **Framework Preset**: 选择 "Other" 或 "Static"
3. **Build Command**: 留空（静态网站无需构建）
4. **Output Directory**: 留空（根目录）
5. **Root Directory**: 留空

#### 步骤4: 部署
1. 点击 "Deploy"
2. Vercel 会自动开始部署
3. 等待约 30-60 秒
4. 获得部署链接: `https://drug-design-navigation.vercel.app`

### 方法B: 通过 Vercel CLI（命令行）

#### 步骤1: 安装 Vercel CLI
```bash
npm install -g vercel
```

#### 步骤2: 部署
```bash
# 进入网站目录
cd /d "D:\software\workbuddy\Test\260321-net"

# 登录 Vercel
vercel login

# 部署项目
vercel

# 生产环境部署
vercel --prod
```

## ⚙️ Vercel 配置文件 (vercel.json)

我已经为你创建了 `vercel.json` 配置文件，Vercel 会自动识别并应用这些设置：

```json
{
  "name": "drug-design-navigation",
  "version": 2,
  "builds": [
    {
      "src": "**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600"
        }
      ]
    }
  ]
}
```

## 🔍 验证部署
1. 访问你的 Vercel 链接
2. 检查控制台是否有错误
3. 测试所有功能
4. 验证响应式设计

## 🎨 自定义设置

### 自定义域名
1. 在 Vercel 项目仪表板
2. 点击 "Settings" → "Domains"
3. 添加你的域名
4. 按照提示配置 DNS

### 环境变量
如果需要环境变量：
1. Settings → Environment Variables
2. 添加变量
3. 重新部署

### 自动部署
- 每次推送到 GitHub 主分支会自动触发部署
- 支持预览部署（PR 时自动创建）

## 🛠️ 故障排除

### 问题1: 404 错误
- 检查 `vercel.json` 配置
- 确保路由配置正确
- 验证文件结构

### 问题2: CORS 问题
- 检查外部资源加载
- 确保 CDN 链接使用 HTTPS
- 添加适当的 CORS 头

### 问题3: 部署失败
- 查看 Vercel 部署日志
- 检查文件大小限制（100MB）
- 验证网络连接

## 🔄 更新网站
### 自动更新
- 推送到 GitHub 主分支
- Vercel 自动检测并部署

### 手动更新
```bash
# 使用 Vercel CLI
vercel --prod

# 或通过网页重新部署
```

## 📊 监控和分析
- **Analytics**: 访问统计
- **Speed Insights**: 性能分析
- **Logs**: 部署和运行日志

## ⚡ Vercel 优势
1. **全球边缘网络**: 网站加载速度极快
2. **自动 SSL**: 免费 HTTPS 证书
3. **无限带宽**: 免费套餐足够使用
4. **即时回滚**: 一键恢复到之前版本
5. **团队协作**: 多人协作部署

## 📱 移动端支持
- 自动优化图片
- 代码分割
- 预加载优化

## 🔗 示例链接
- 生产环境: `https://drug-design-navigation.vercel.app`
- 预览环境: `https://drug-design-navigation-git-[分支名]-[用户名].vercel.app`

## 💰 免费套餐限制
- 100GB 带宽/月
- 1000 个函数调用/天
- 足够个人项目使用

## 📞 技术支持
- Vercel Docs: https://vercel.com/docs
- Discord 社区: https://vercel.com/discord
- GitHub Issues: 项目问题

---
*Vercel 部署完成后，你的网站将拥有极快的全球访问速度！*