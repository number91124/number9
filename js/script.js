// drawer
$(".drawer-icon").click(function () {
  $(".drawer-icon").toggleClass("is-active");
  $(".drawer__lists").toggleClass("is-active");
});

// swiper
function initSwiper() {
  let slidesToShow = 1.3; // デフォルトは1つのスライドを表示

  if (window.innerWidth >= 768) {
    slidesToShow = 3; // 画面幅が768px以上の場合は3つのスライドを表示
  }

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: slidesToShow, // 表示するスライド数を設定
    centeredSlides: true,
    spaceBetween: 18,
    pagination: {
      el: ".swiper-pagination",
    },
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  // ウィンドウサイズが変更されたらSwiperを再初期化して設定を更新;
  window.addEventListener("resize", function () {
    let newSlidesToShow = 1.3; // デフォルトは1つのスライドを表示

    if (window.innerWidth >= 768) {
      newSlidesToShow = 3; // 画面幅が768px以上の場合は3つのスライドを表示
    }

    // スライド数や間隔を変更してSwiperを更新
    if (newSlidesToShow !== slidesToShow) {
      swiper.params.slidesPerView = newSlidesToShow;
      swiper.params.spaceBetween = 18;
      slidesToShow = newSlidesToShow; // スライド数を更新
      swiper.update();
    }
  });
}
initSwiper(); // 初期化

// tab
$(document).ready(function () {
  $(".company__contents , .history__contents-wrapper , .certifications__contents-wrapper").hide();
  $("#content-overview").show();

  $(".company__tab-menu-item").on("click", function () {
    $(".company__tab-menu-item").removeClass("is-active");

    $(this).addClass("is-active");

    $(".company__contents , .history__contents-wrapper , .certifications__contents-wrapper").hide();
    const tabId = $(this).attr("id").replace("tab-", "content-");
    $(`#${tabId}`).show();
  });
});

// accordion
$(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
});
