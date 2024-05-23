// ハンバーガーメニュー
$(document).ready(function () {
  $("#hamburger-icon").on("click", function (e) {
    e.preventDefault();
    $(".toggle-list").slideToggle();
  });
});

// スライドショー
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // クリック有効化
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// コロナ対応アコーディオン
$(".js-accordion").on("click", function () {
  $(this).next().slideToggle();
});
