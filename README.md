# 药物设计导航平台

一个为药物设计研究人员提供一站式网站导航服务的平台。

## 🌐 在线访问
- **GitHub Pages**: https://Ocean999188.github.io/drug-design-navigation/
- **Vercel**: https://drug-design-navigation.vercel.app

## 🚀 功能特点
- **快速访问**: 点击按钮直接跳转到常用药物设计网站
- **分类清晰**: 按功能分类（ADMET预测、分子对接、数据库等）
- **响应式设计**: 适配电脑、平板和手机
- **搜索功能**: 快速找到目标网站
- **暗色模式**: 支持夜间使用

## 📁 包含网站
1. **Xenosite N-Dealkylation** - 药物代谢预测
2. **Xundrug MolGpKa** - pKa预测平台
3. **AutoDock Vina** - 分子对接软件
4. **PubChem** - 化学物质数据库
5. **SwissADME** - ADMET性质预测
6. **PyMOL** - 分子可视化系统

## 🛠️ 技术栈
- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- JavaScript (ES6+)
- Font Awesome 图标
- Google Fonts 字体

## 📱 响应式设计
- 桌面端: 1200px+
- 平板端: 768px - 1199px
- 手机端: < 768px

## 🚀 本地运行
```bash
# 克隆仓库
git clone https://github.com/[你的用户名]/drug-design-navigation.git

# 进入目录
cd drug-design-navigation

# 启动本地服务器
python -m http.server 8000

# 访问 http://localhost:8000
```

## 📄 文件结构
```
drug-design-navigation/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互脚本
├── README.md           # 说明文档
├── .gitignore          # Git忽略文件
└── 访问指南.md         # 部署和访问指南
```

## 🔧 部署指南

### GitHub Pages
1. 在 GitHub 创建新仓库 `drug-design-navigation`
2. 上传所有文件
3. Settings → Pages → Source → main branch
4. 等待部署完成

### Vercel
1. 访问 https://vercel.com
2. 导入 GitHub 仓库
3. 自动部署，获得自定义域名

## 📝 更新日志
- **v1.0.0** (2026-03-21): 初始版本发布
  - 6个药物设计网站整合
  - 响应式设计
  - 暗色模式支持
  - 搜索和筛选功能

## 👥 贡献
欢迎提交 Issue 和 Pull Request 来改进这个平台！

## 📄 许可证
本项目仅供科研使用，遵循 MIT 许可证。

## 📧 联系
如有问题或建议，请通过 GitHub Issues 联系我们。

---
*为药物设计研究人员提供高效的一站式导航服务*
