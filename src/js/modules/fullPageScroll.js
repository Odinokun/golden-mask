module.exports = function() {

    // begin Full Page Scroll
    $(document).ready(function() {
        $('#fullpage').fullpage({
            sectionsColor: ['#f3f2f8', '#f3f2f8', '#13abeb', '#f3f2f8', '#1BBC9B', '#13abeb'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Главная', 'О клубе', 'Развлечения', 'Фотогалерея', 'Меню', 'Контакты']
        });
    });
    // end   Full Page Scroll

};
