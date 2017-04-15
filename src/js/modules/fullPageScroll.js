module.exports = function() {

    // begin Full Page Scroll
    $(document).ready(function() {
        $('#fullpage').fullpage({
            sectionsColor: ['#e1e1e6', '#e1e1e6', '#e1e1e6', '#e1e1e6', '#e1e1e6', '#e1e1e6'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Главная', 'О клубе', 'Развлечения', 'Фотогалерея', 'Меню', 'Контакты']
        });
    });
    // end   Full Page Scroll

};
