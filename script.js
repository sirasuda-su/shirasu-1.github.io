
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4
        }s`;
    }
  });
  burger.classList.toggle("toggle");
});
//gpt曰く↓
let lastScrollTop = 0; // 最後のスクロール位置
const navbar = document.querySelector('nav'); // ナビゲーションバーを選択

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 現在のスクロール位置

  if (scrollTop > lastScrollTop) {
    // 下スクロール時
    navbar.style.top = '-80px'; // ナビゲーションバーを隠す
  } else {
    // 上スクロール時
    navbar.style.top = '0'; // ナビゲーションバーを再表示
  }

  lastScrollTop = scrollTop; // スクロール位置を更新
});

