@echo off
chcp 65001 >nul
echo ========================================
echo  药物设计导航平台 - 简化部署脚本
echo ========================================
echo.

REM 检查Git是否安装
where git >nul 2>nul
if errorlevel 1 (
    echo 错误: Git未安装或未添加到PATH
    echo 请先安装Git: https://git-scm.com/download
    pause
    exit /b 1
)

REM 检查是否在正确目录
if not exist "index.html" (
    echo 错误: 请在网站根目录运行此脚本
    echo 当前目录: %cd%
    pause
    exit /b 1
)

echo 步骤1: 初始化Git仓库
git init
echo.

echo 步骤2: 添加所有文件
git add .
echo.

echo 步骤3: 提交更改
git commit -m "部署药物设计导航平台"
echo.

echo ========================================
echo  手动操作步骤:
echo ========================================
echo.
echo 1. 访问 https://github.com/new
echo 2. 创建仓库: drug-design-navigation
echo 3. 不要初始化任何文件
echo 4. 创建后复制仓库URL
echo.
echo 然后运行以下命令:
echo   git remote add origin [你的仓库URL]
echo   git branch -M main
echo   git push -u origin main
echo.
echo 最后:
echo 1. 访问仓库 Settings → Pages
echo 2. 选择 main 分支和 /(root) 文件夹
echo 3. 保存并等待部署完成
echo.
echo 你的网站: https://[用户名].github.io/drug-design-navigation/
echo.
pause