module.exports = function() {

  // begin Full Page Scroll
  // function windowSize(){
  //   if (($(window).width() <= '767') || ($(window).height() <= '840')){
  //     $.fn.fullpage.destroy('all');
  //     // console.log('small screen');
  //   } else {
  //     $('#fullpage').fullpage({
  //       navigation: true,
  //       navigationPosition: 'right',
  //       navigationTooltips: ['Главная', 'О клубе', 'Развлечения', 'Фотогалерея', 'Меню', 'Контакты'],
  //     });
  //     // console.log('big screen');
  //   }
  // }

  function windowSize(){
    // if (($(window).width() <= '767') || ($(window).height() <= '840')){
    if (($(window).width() >= '1111') || ($(window).height() <= '900')){
      $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Главная', 'О клубе', 'Развлечения', 'Фотогалерея', 'Меню', 'Контакты'],
      });
      // console.log('small screen');
    } else {
      $.fn.fullpage.destroy('all');
      // console.log('big screen');
    }
  }

  $(window).on('load resize',windowSize);
  // end   Full Page Scroll

};
