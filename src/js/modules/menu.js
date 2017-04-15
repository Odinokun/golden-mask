module.exports = function() {

    //mobile menu
    $('.top-nav__list, .burger').on('click', function() {
        $('.top-nav__list').toggleClass('active');
        $(".burger").toggleClass('active');
        $('.top-contacts').removeClass('active');
        $('.top-contacts__open-btn').removeClass('active');
      // $(".menu-mob__list").slideToggle();
      // $(".menu-mob__item").toggleClass('active');
      // $('body').toggleClass("fix");
    });

    //mobile menu
    $('.top-contacts__open-btn').on('click', function() {
        $('.top-contacts').toggleClass('active');
        $('.top-contacts__open-btn').toggleClass('active');
        $('.top-nav__list').removeClass('active');
        $(".burger").removeClass('active');
      // $(".burger").toggleClass('active');
      // $(".menu-mob__list").slideToggle();
      // $(".menu-mob__item").toggleClass('active');
      // $('body').toggleClass("fix");
    });
    // end   Full Page Scroll

};
