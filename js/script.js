
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる


//スライダー
  const swiper = new Swiper('.swiper', {
    // direction: 'vertical',//縦向き
    loop: true,//ループ
    autoplay: {
      delay: 2000,
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  //ヘッダー背景色変更
  jQuery(window).on('scroll', function () {
    if (870 < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('change-color');
    } else {
        jQuery('.header').removeClass('change-color');
    }
  });

//ページトップ
  var topBtn = $('.pagetop');
  topBtn.hide();
  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });
  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

//ドロワーメニュー
    $(function () {
      $('#js-hamburger').click(function () {
        $('body').toggleClass('is-drawerActive')

        if ($(this).attr('aria-expanded') == 'false') {
          $(this).attr('aria-expanded', 'true')
          $('#js-global-menu').attr('area-hidden','false')
        } else {
          $(this).attr('aria-expanded', 'false')
          $('#js-global-menu').attr('area-hidden','true')
        }
      })
      //背景の黒ボックスクリックでもドロワーが消えるようにする
      $('#js-drawer-background').click(function () {
        $('body').removeClass('is-drawerActive')
        $('#js-hamburger').attr('aria-expanded', 'false')
        $('#js-global-menu').attr('area-hidden','true')
      })
    });

// スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });



});
