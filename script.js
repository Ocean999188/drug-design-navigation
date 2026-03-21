// 网站详情数据
const siteDetails = {
    xenosite: {
        title: "Xenosite N-Dealkylation",
        description: "Xenosite N-Dealkylation是一个基于机器学习的在线工具，专门用于预测药物分子的N-脱烷基化代谢位点。该工具支持多种化合物输入格式，包括SMILES、InChI和SDF文件。",
        features: [
            "基于机器学习算法的代谢位点预测",
            "支持多种化合物输入格式",
            "提供详细的代谢产物预测结果",
            "可视化展示代谢位点",
            "批量处理功能（需注册）"
        ],
        usage: "适用于药物代谢研究、先导化合物优化和ADMET性质预测。",
        url: "https://xenosite.org/ndealk"
    },
    xundrug: {
        title: "Xundrug MolGpKa",
        description: "MolGpKa是一个专业的分子pKa预测平台，能够准确预测化合物在不同pH条件下的电离状态。该工具对于药物设计和物化性质预测非常重要。",
        features: [
            "多质子化状态pKa预测",
            "支持复杂分子结构",
            "提供pKa分布图",
            "预测不同pH条件下的电离状态",
            "批量计算功能"
        ],
        usage: "用于药物溶解度预测、制剂设计和吸收预测。",
        url: "https://xundrug.cn/molgpka"
    },
    autodock: {
        title: "AutoDock Vina",
        description: "AutoDock Vina是一个开源的分子对接程序，用于预测小分子配体与生物大分子受体的结合模式和结合自由能。",
        features: [
            "快速准确的分子对接",
            "支持多种文件格式",
            "并行计算支持",
            "开源免费",
            "跨平台运行"
        ],
        usage: "用于虚拟筛选、先导化合物发现和结合模式分析。",
        url: "http://vina.scripps.edu"
    },
    pubchem: {
        title: "PubChem",
        description: "PubChem是由美国国立卫生研究院（NIH）维护的化学物质数据库，包含超过1亿种化合物的结构、性质和生物活性数据。",
        features: [
            "海量化合物数据库",
            "详细的物化性质数据",
            "生物活性筛选结果",
            "化学结构搜索",
            "API接口支持"
        ],
        usage: "化合物信息查询、结构相似性搜索和生物活性数据获取。",
        url: "https://pubchem.ncbi.nlm.nih.gov"
    },
    swissadme: {
        title: "SwissADME",
        description: "SwissADME是一个综合的ADMET性质预测工具，提供药物相似性、吸收、分布、代谢、排泄和毒性预测。",
        features: [
            "综合ADMET性质预测",
            "药物相似性评估",
            "血脑屏障穿透性预测",
            "CYP450代谢预测",
            "免费在线工具"
        ],
        usage: "药物候选物筛选、ADMET性质评估和先导化合物优化。",
        url: "http://www.swissadme.ch"
    },
    pymol: {
        title: "PyMOL",
        description: "PyMOL是一个强大的分子可视化系统，用于创建高质量的3D分子结构图像和动画。",
        features: [
            "高质量的3D分子可视化",
            "支持多种分子文件格式",
            "脚本自动化支持",
            "图像和动画导出",
            "教育版免费"
        ],
        usage: "分子结构展示、科研论文配图制作和分子相互作用分析。",
        url: "https://pymol.org"
    }
};

// DOM元素
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterButtons = document.querySelectorAll('.filter-btn');
const siteCards = document.querySelectorAll('.site-card');
const modal = document.getElementById('site-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

// 主题切换功能
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// 搜索功能
function searchSites() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        // 如果搜索框为空，显示所有卡片
        siteCards.forEach(card => {
            card.style.display = 'flex';
        });
        return;
    }
    
    siteCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.site-description').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.site-tags .tag')).map(tag => tag.textContent.toLowerCase());
        
        const matches = title.includes(searchTerm) || 
                       description.includes(searchTerm) || 
                       tags.some(tag => tag.includes(searchTerm));
        
        card.style.display = matches ? 'flex' : 'none';
    });
}

// 分类过滤功能
function filterSites(category) {
    siteCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'flex';
        } else {
            const cardCategory = card.getAttribute('data-category');
            card.style.display = cardCategory === category ? 'flex' : 'none';
        }
    });
}

// 显示网站详情
function showDetails(siteId) {
    const site = siteDetails[siteId];
    if (!site) return;
    
    modalTitle.textContent = site.title;
    
    modalContent.innerHTML = `
        <div class="site-detail">
            <div class="detail-header">
                <h4>网站描述</h4>
                <p>${site.description}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-star"></i> 主要功能</h4>
                <ul class="feature-list">
                    ${site.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-cogs"></i> 主要用途</h4>
                <p>${site.usage}</p>
            </div>
            
            <div class="detail-section">
                <h4><i class="fas fa-link"></i> 网站链接</h4>
                <div class="url-box">
                    <code>${site.url}</code>
                    <a href="${site.url}" target="_blank" class="btn-primary">
                        <i class="fas fa-external-link-alt"></i> 立即访问
                    </a>
                </div>
            </div>
            
            <div class="detail-tips">
                <h4><i class="fas fa-lightbulb"></i> 使用建议</h4>
                <ul>
                    <li>建议使用最新版本的浏览器访问</li>
                    <li>部分功能可能需要注册账户</li>
                    <li>对于复杂分子，计算时间可能较长</li>
                    <li>保存重要计算结果到本地</li>
                </ul>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 标签点击搜索
function setupTagSearch() {
    document.querySelectorAll('.search-tags .tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const tagText = tag.textContent;
            searchInput.value = tagText;
            searchSites();
        });
    });
}

// 初始化事件监听器
function initEventListeners() {
    // 主题切换
    themeToggle.addEventListener('click', toggleTheme);
    
    // 搜索功能
    searchBtn.addEventListener('click', searchSites);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchSites();
        }
    });
    
    // 分类过滤
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加active类
            button.classList.add('active');
            // 执行过滤
            const category = button.getAttribute('data-category');
            filterSites(category);
        });
    });
    
    // 模态框关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // 标签搜索
    setupTagSearch();
}

// 添加网站详情样式
function addDetailStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .site-detail {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .detail-header h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
        }
        
        .detail-header p {
            color: var(--text-light);
            line-height: 1.6;
        }
        
        .detail-section {
            background: var(--light-color);
            padding: 1.2rem;
            border-radius: var(--radius);
            border: 1px solid var(--border-color);
        }
        
        .detail-section h4 {
            font-size: 1.1rem;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-color);
        }
        
        .feature-list {
            list-style: none;
            padding-left: 0;
        }
        
        .feature-list li {
            margin-bottom: 0.5rem;
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
        }
        
        .feature-list li i {
            color: var(--success-color);
            margin-top: 0.2rem;
        }
        
        .url-box {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .url-box code {
            background: rgba(74, 111, 165, 0.1);
            padding: 0.5rem 1rem;
            border-radius: var(--radius);
            font-family: monospace;
            flex: 1;
            overflow-x: auto;
        }
        
        .detail-tips ul {
            list-style: none;
            padding-left: 0;
        }
        
        .detail-tips li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }
        
        .detail-tips li:before {
            content: "💡";
            position: absolute;
            left: 0;
        }
        
        @media (max-width: 768px) {
            .url-box {
                flex-direction: column;
                align-items: stretch;
            }
            
            .url-box code {
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 初始化网站
function initWebsite() {
    initTheme();
    initEventListeners();
    addDetailStyles();
    initSmoothScroll();
    
    console.log('药物设计导航平台已初始化');
    console.log('功能说明：');
    console.log('1. 点击按钮可直接访问对应网站');
    console.log('2. 使用搜索框可以快速查找网站');
    console.log('3. 使用分类过滤器可以按类别筛选');
    console.log('4. 点击"详情"按钮查看网站详细信息');
    console.log('5. 点击右上角图标切换深色/浅色主题');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initWebsite);

// 添加键盘快捷键支持
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // ESC 关闭模态框
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Ctrl/Cmd + / 显示帮助
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        alert('快捷键说明：\nCtrl/Cmd + K: 聚焦搜索框\nESC: 关闭模态框\nCtrl/Cmd + /: 显示此帮助');
    }
});

// 添加网站访问统计（模拟）
function trackSiteVisit(siteName) {
    console.log(`访问了网站: ${siteName}`);
    // 在实际应用中，这里可以添加Google Analytics或其他统计代码
}

// 为所有外部链接添加访问跟踪
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href.includes('http') && e.target.target === '_blank') {
        const siteName = e.target.closest('.site-card')?.querySelector('h3')?.textContent || '未知网站';
        trackSiteVisit(siteName);
    }
});