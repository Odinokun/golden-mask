$(function() {

  // begin preloader
  require('./modules/preloader')();
  // end preloader

  // begin require SVG for IE
  require('./modules/svg4everybody')();
  // end   require SVG for IE

  // begin Chrome Smooth Scroll
  require('./modules/smoothScroll')();
  // end   Chrome Smooth Scroll

  // begin Full Page Scroll
  require('./modules/fullPageScroll')();
  // end   Full Page Scroll

  // begin Interior section Slider
  require('./modules/interiorSlider')();
  // end Interior section Slider

  // begin Tab in join section index.html
  require('./modules/joinTabs')();
  // end Tab in join section index.html

  // begin mobile menu & burger
  require('./modules/menu')();
  // end mobile menu & burger

  // begin scroll 2 ancor
  require('./modules/scroll2ancor')();
  // end scroll 2 ancor


});