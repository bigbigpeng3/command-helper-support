// assets/js/lang-switcher.js
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const currentLang = currentPath.includes('/zh/') ? 'zh' : 'en';
    const targetLang = currentLang === 'en' ? 'zh' : 'en';
    
    // Update the language switcher link href
    const langSwitcher = document.getElementById('lang-switch');
    if (langSwitcher) {
        langSwitcher.href = `/${targetLang}/${currentPage}`;
        langSwitcher.textContent = targetLang === 'en' ? 'English' : '中文';
    }
});