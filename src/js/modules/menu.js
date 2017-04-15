module.exports = function() {

    //mobile menu
    $('.burger').on('click', function() {
        $('.top-nav__list').toggleClass('active');
        $(".burger").toggleClass('active');
        $('.top-contacts').removeClass('active');
        $('.top-contacts__open-btn').removeClass('active');
    });

    //mobile contacts-menu
    $('.top-contacts__open-btn').on('click', function() {
        $('.top-contacts').toggleClass('active');
        $('.top-contacts__open-btn').toggleClass('active');
        $('.top-nav__list').removeClass('active');
        $(".burger").removeClass('active');
    });

};
