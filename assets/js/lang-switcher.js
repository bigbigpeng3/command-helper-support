// assets/js/lang-switcher.js
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    // 获取仓库名（假设始终为 /仓库名/）
    const pathParts = currentPath.split('/');
    // ['', 'command-helper-support', 'en', 'index.html']
    const repo = pathParts[1] ? '/' + pathParts[1] : '';
    const currentPage = pathParts.pop() || 'index.html';
    const currentLang = currentPath.includes('/zh/') ? 'zh' : 'en';
    const targetLang = currentLang === 'en' ? 'zh' : 'en';
    
    // Update the language switcher link href
    const langSwitcher = document.getElementById('lang-switch');
    if (langSwitcher) {
        langSwitcher.href = `${repo}/${targetLang}/${currentPage}`;
        langSwitcher.textContent = targetLang === 'en' ? 'English' : '中文';
    }
});