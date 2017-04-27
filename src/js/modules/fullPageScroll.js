module.exports = function() {

  // begin Full Page Scroll
  function windowSize() {
    // убираем кастомный скролл для iPad
    if (($(window).width() == '768') || ($(window).height() == '1024')) {
      $.fn.fullpage.destroy('all');
    }
    // включаем кастомный скролл для десктопов
    else if (($(window).width() >= '1111') || ($(window).height() >= '900')) {
      $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Главная', 'О клубе', 'Развлечения', 'Фотогалерея', 'Меню', 'Контакты'],
      });
    }
    // отключаем кастомный скролл для всего остального
    else {
      $.fn.fullpage.destroy('all');
    }
  }

  $(window).on('load resize',windowSize);
  // end   Full Page Scroll

};
