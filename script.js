// 暗黑模式切换
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // 记住用户的选择，存入 localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
}

// 页面加载时，检查用户是否之前启用了暗黑模式
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});
