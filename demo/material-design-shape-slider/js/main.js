$(function() {

  var Shapes = (function() {

    var link = $('.section__nav-link');
    var section = $('.section');
    var svg = $('.section__nav-link > svg');

    var toggleSection = function() {
      var i = $(this).parents('li').index();

      link.removeClass('active');
      svg.removeAttr('style');
      $(this).addClass('active');

      section.css({
        'transform': 'translateY(-' + i +'00%)',
        '-webkit-transform': 'translateY(-' + i +'00%)'
      });

      return false;
    };

    var toggleSpace = function() {

      if ($(this).parent().hasClass('active')) {
        link.removeClass('active');
        section.css('opacity', 0);

        section.on('transitionend', function() {
          section.css({
            'transform': 'translateY(-400%)',
            '-webkit-transform': 'translateY(-400%)',
          });
          section.on('transitionend', function() {
            section.css('opacity', '1');
            section.off('transitionend');
          });
        });

        return false;
      }
    };

    var showFirst = function() {
      link.eq(0).addClass('active');
    };

    var bindActions = function() {
      link.on('click', toggleSection);
      svg.on('click', toggleSpace);
      showFirst();
    };

    var init = function() {
      bindActions();
    };

    return {
      init: init
    };

  }());

  Shapes.init();
});
