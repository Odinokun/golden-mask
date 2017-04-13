module.exports = function() {

  // begin thumb-tabs
  $(function() {
    $(".join-section-tabs__tab").click(function() {
      $(".join-section-tabs__tab").removeClass("active");
      $(this).addClass("active");

      var activeTab = $(this).attr("data-tab"); //Найти data атрибут для определения активной вкладки+контента

      $(".join-tab").removeClass("active");
      $(activeTab).addClass("active");

      return false;
    });
  });
  // end   thumb-tabs

};