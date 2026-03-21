@echo off
echo ========================================
echo  药物设计导航平台 - 一键部署脚本
echo ========================================
echo.

REM 检查是否在正确目录
if not exist "index.html" (
    echo 错误: 请在网站根目录运行此脚本
    echo 当前目录: %cd%
    pause
    exit /b 1
)

echo 步骤1: 初始化Git仓库
if not exist ".git" (
    git init
    echo ✓ Git仓库初始化完成
) else (
    echo ✓ Git仓库已存在
)

echo.
echo 步骤2: 添加所有文件到暂存区
git add .
echo ✓ 文件已添加到暂存区

echo.
echo 步骤3: 提交更改
set /p commit_msg="请输入提交信息 (默认: 更新部署): "
if "%commit_msg%"=="" set commit_msg="更新部署"
git commit -m "%commit_msg%"
echo ✓ 更改已提交

echo.
echo 步骤4: 设置远程仓库（如果需要）
git remote -v | findstr origin >nul
if errorlevel 1 (
    echo 请设置远程仓库URL:
    echo 示例: https://github.com/用户名/drug-design-navigation.git
    set /p repo_url="请输入远程仓库URL: "
    if not "%repo_url%"=="" (
        git remote add origin "%repo_url%"
        echo ✓ 远程仓库已添加: %repo_url%
    ) else (
        echo ⚠ 跳过远程仓库设置
    )
) else (
    echo ✓ 远程仓库已配置
)

echo.
echo 步骤5: 推送到GitHub
set branch=main
git branch -M %branch%
git push -u origin %branch%
echo ✓ 代码已推送到GitHub

echo.
echo ========================================
echo  部署完成！
echo ========================================
echo.
echo 下一步操作:
echo 1. 访问你的GitHub仓库
echo 2. 进入 Settings → Pages
echo 3. 选择 main 分支和 /(root) 文件夹
echo 4. 保存设置
echo 5. 等待1-2分钟部署完成
echo.
echo 你的网站将可通过以下地址访问:
echo   https://[你的用户名].github.io/drug-design-navigation/
echo.
pause