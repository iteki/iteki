document.addEventListener("DOMContentLoaded", function () {
    // 🌙 暗黑模式
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // 🎨 绑定按钮事件
    let darkModeButton = document.getElementById("darkModeToggle");
    if (darkModeButton) {
        darkModeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
        });
    }

    // 🖼️ 图片轮播
    let slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return; // 确保有图片

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0"; // 直接操作 opacity
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex); // 初始显示第一张
    setInterval(nextSlide, 3000); // 3秒切换
});
