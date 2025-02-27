// 暗黑模式切换
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// 滚动动画
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
