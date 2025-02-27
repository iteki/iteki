// 暗黑模式切换
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// 访问量统计（前端去重）
let visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;
const hasVisited = localStorage.getItem('hasVisited');

if (!hasVisited) {
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    localStorage.setItem('hasVisited', true);
}

document.getElementById('visitorCount').textContent = visitorCount;

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
