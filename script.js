// 暗黑模式切换
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // 记住用户的选择
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

// 轮播图功能
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slideshow-container img");
    if (slides.length === 0) return;

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // 每3秒切换
});
